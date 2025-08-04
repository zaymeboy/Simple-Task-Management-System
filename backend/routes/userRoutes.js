const express = require('express');
const router = express.Router();

const {
    userRegister , userLogin , getProfile
} = require('../controller/userController');

// untuk auth
const { authUser } = require('../middeware/authUser');


router.route('/register').post(userRegister);
router.route('/login').post(userLogin);

//chech user authenticated or not
router.route('/auth').post(authUser , getProfile);

module.exports = router;