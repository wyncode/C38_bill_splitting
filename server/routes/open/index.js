const router = require('express').Router(),
  User = require('../../db/models/user');

router.get('/api/users', async (req, res) => res.json(req.user));

router.post('/api/users', async (req, res) => {
  const { name, email, password, payment, billHistory } = req.body;
  try {
    const user = new User({
      name,
      email,
      password,
      payment,
      billHistory
    });

    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

router.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

router.get('/api/password', async (req, res) => {
  try {
    const { email } = req.query,
      user = await User.findOne({ email });
    if (!user) throw new Error('please recheck your login information');
    const token = jwt.sign(
      {
        _id: user._id.toString(),
        name: user.name
      },
      process.env.JWT_SECRET,
      { expiresIn: '5m' }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'please check your email for password reset' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

router.get('/api/password/:token', (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (error) {
      if (error) throw new Error(error.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 50000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

module.exports = router;
