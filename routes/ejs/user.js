const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.send('get register')
});
router.post('/register', (req, res) => {
    res.send('registered')
});


router.get('/login', (req, res) => {
    res.send('get login')
});
router.post('/login', (req, res) => {
    res.send('logged you in')
});

router.get('/logout', (req, res) => {
    res.send('logout')
});

module.exports = router;