const express = require('express');
const router = express.Router();

const {
    checkEmail, registerUser , userLogin
} = require('../controller/userController');


router.route('/')
    .post(registerUser)
    .get(userLogin);

module.exports = router;