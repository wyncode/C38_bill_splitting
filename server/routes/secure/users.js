const router = require('express').Router(),
  cloudinary = require('cloudinary').v2,
  User = require('../../db/models/user'),
  isAdmin = require('../../db/middleware/authorization/authorization');

router.get('/api/admin', isAdmin(), async (req, res) => {
  try {
    res.json({ message: 'admin user' });
  } catch (error) {
    res.status(401).json({ error: error.toString() });
  }
});

router.get('/api/users/me', async (req, res) => res.json(req.user));

router.patch('/api/users/me', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'avatar', 'payment'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'invalid update!' });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

router.post('/api/users/logout', async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

router.post('/api/users/logoutAll', async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'all devices logged out' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

router.put('/api/password', async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'password updated successfully' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

router.delete('/api/users/me', async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.name);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(500).json({ error: e.toString() });
  }
});

module.exports = router;
