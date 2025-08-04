const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authUser = asyncHandler(async(req, res, next)=>{
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token , process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('password');
            //const test= req.user._id;
            //console.log(test);
            next();
        }catch(err){
            res.status(401).json({
            success: false,
            message: err
        });
        }
    }
    if(!token){
        res.status(401).json({
            success: false,
            message: "No token"
        });
    }
});

module.exports = { authUser };