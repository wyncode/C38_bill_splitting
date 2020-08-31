const { PaymentMethodNonce } = require('braintree');

const braintree = require('braintree'),
  router = require('express').Router();

const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY
});

router.get('/braintree', async (req, res) => {
  try {
    const response = await (await gateway.clientToken.generate()).clientToken;
    res.send({ data: response });
  } catch (error) {
    console.log(error);
  }
});

router.post('/braintreepayment', async (req, res) => {
  try {
    const payment = await gateway.transaction.sale({
      amount: '10.00',
      paymentMethodNonce: req.body.nonce,
      options: {
        submitForSettlement: true
      }
    });
    res.send({ data: payment });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
