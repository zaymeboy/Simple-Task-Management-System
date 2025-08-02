const express = require('express');
const router = express.Router();
//const User = require('../models/User');

const {
    checkEmail, registerUser , userLogin
} = require('../controller/userController');

//middleware tapi belum buat

router.route('/')
    .post(registerUser)
    .get(userLogin);

/*
router.post('/register', async(req , res)=>{
    const {username , email , password} = req.body;
    try {
        user = new User({
            username,
            email,
            password
        });
        await user.save();
        res.status(201).json({ms:'User register successully!'});
    }catch (err){
        console.error(err.message);
        res.status(500).send('Ada Error!');
    }
});
*/

module.exports = router;