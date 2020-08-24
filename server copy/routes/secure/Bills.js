const router = require('express').Router(),
  Bill = require('../../db/models/bill'),
  User = require('../../db/models/user');

router.get('/api/bill/me', async (req, res) => res.json(req.bill));

router.post('/api/bill/me', async (req, res) => {
  const { amountDue, party, billDate, taxes, gratuity } = req.body;
  try {
    const bill = new Bill({
      amountDue,
      party: req.user.id,
      billDate,
      taxes,
      gratuity,
    });
    await bill.save();
    const newBillID = new Bill(req.params._id);
    console.log(newBillID);
    return (
      User.findById(req.params._id).then((newID) => {
        newBillID.save().then((createdBillID) => {
          newID._id.push(createdBillID._id);
        });
      }),
      res.status(201).json(bill)
    );
  } catch (error) {
    res.status(400).json({ error: e.toString() });
  }
});

router.get('api/bill/me/:id', async (req, res) => {
  try {
    const findBill = Bill.findById(req.params.id);
    res.json(findBill);
  } catch (error) {
    res.status(400).json({ error: e.toString() });
  }
});

router.patch('api/bill/me/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['party'];
  const validOperation = updates.every((update) =>
    allowedUpdates.includes(update),
  );
  if (!validOperation) return res.status(400).send({ error: 'invalid error' });
  try {
    updates.forEach((update) => (req.bill[update] = req.body[update]));
    await req.bill.save();
    res.json(req.bill);
  } catch (error) {
    res.status(400).json({ error: e.toString() });
  }
});

module.exports = router;
