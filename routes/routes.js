const express = require('express');
const path = require('path');
const { register, login } = require('../controllers/authController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Esta es una ruta protegida', user: req.user });
});

router.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); // Ruta al archivo index.html
});

module.exports = router;