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
const userRegister = asyncHandler(async (req, res) => {
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
            message: 'Registration successful!'
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
        //buat token
        const token = generateToken(checkEmail._id);

        //simpan token dalam cookie
        res.cookie('session_id', token,{
            httpOnly: true,
            sameSite: 'strict',
            // Simple logic for `maxAge` based on a string like '1d' or '60m'
            maxAge: process.env.JWT_EXPIRES_IN.includes('d') 
                ? parseInt(process.env.JWT_EXPIRES_IN) * 24 * 60 * 60 * 1000 
                : parseInt(process.env.JWT_EXPIRES_IN) * 60 * 1000, 
            secure: process.env.NODE_ENV ==='production'
        });

        res.status(200).json({
            success: true,
            message: 'Login succsessful!',
            session_id: token,
        });
    }else {
        res.status(401).json({success:false , message: "Invalid Credentials"})
    }
});

const getProfile = asyncHandler(async(req, res)=>{
    if(req.user){
        res.json({
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
        });
    }else{
        res.status(404);
        throw new Error('User not found');
    }
});

module.exports = { userRegister, userLogin , getProfile };