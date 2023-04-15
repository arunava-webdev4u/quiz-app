const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('dev home page')
});

router.get('/dashboard', (req, res) => {
    res.send('show all rounds')
});




module.exports = router;