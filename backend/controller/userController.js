const User = require('../models/User');

//untuk memudahkan yaa
const asyncHandler = require('express-async-handler');

//untuk jwt
const jwt = require('jsonwebtoken');

require('dotenv').config();

//generate token jwt
const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

//register
const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;    

    //check ada ke tidak
    if (!email || !username || !password) {
        return res.status(400).json({ message: "Please enter all required fields." });
    }

    //check kalau email wujud di database
    const checkEmail = await User.findOne({$or: [{email}]});
    if (checkEmail){
        return res.status(400).json({ message: "User with this email or username already exists." });
    }

    const user = await User.create({ email, username, password });

    if (user) {
        res.status(201).json({
            success: true,
            message: 'Registration successful!',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        });
    } else {
        res.status(400).json({ success: false, message: 'Invalid user data' });
    }
});

//login
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //cek ade ke tidak
    if (!email || !password) {
        res.status(400).json({ message: "Please enter email and password." })
    }
    //check email
    const checkEmail = await User.findOne({email});
    if(checkEmail && (await checkEmail.matchPassword(password))){
        res.status(200).json({
            success: true,
            message: 'Login succsessful!',
            user:{
                id: checkEmail._id,
                username: checkEmail.username,
                email: checkEmail.email,
            },
            //pass token ke frontend
            token: generateToken(checkEmail._id),
        });
    }else {
        res.status(401).json({success:false , message: "Invalid Credentials"})
    }
});
module.exports = { registerUser, userLogin };