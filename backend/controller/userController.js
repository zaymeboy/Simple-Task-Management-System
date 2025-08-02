const User = require('../models/User');

//untuk memudahkan yaa
const asyncHandler = require('express-async-handler');

//register
const registerUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;
    const user = new User({ email, username, password });

    //check ada ke tidak
    if (!email) {
        res.status(400).json({ message: "Email is required." })
    }
    if (!username) {
        res.status(400).json({ message: "Username is required." })
    }
    if (!password) {
        res.status(400).json({ message: "Password is required." })
    }
    try {
        const newUser = await user.save();
        console.log("Add new user successfull");
        res.status(200).json({ success: true, message: 'Register successfull' });
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false, message: 'Register unsuccessfull' });
    }
});

//login
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //cek ade ke tidak
    if (!email) {
        res.status(400).json({ message: "Email is required." })
    }
    if (!password) {
        res.status(400).json({ message: "Password is required." })
    }

    const checkEmail = await User.findOne({email});
    if (!checkEmail) {
        res.status(400).json({ success: false, message: 'Invalid Credentials' });
    }
    
    if (checkEmail.password == password){
        res.status(200).json({ success: true, message: 'Login sucessfull' });
    }else{
        res.status(400).json({ success: false, message: 'Invalid Credentials' });
    }


});
module.exports = { registerUser, userLogin };