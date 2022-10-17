const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login',(req, res) => {
    res.sendFile(path.resolve('./login.html'));
})
router.get('/register',(req, res) => {
    res.sendFile(path.resolve('./register.html'));
})

module.exports = router;