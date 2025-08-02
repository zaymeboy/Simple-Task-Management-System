const mongoose = require('mongoose');
require('dotenv').config();

const connectDB =async()=>{
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI){
            console.error("error env");
            process.exit(1);
        }

        await mongoose.connect(mongoURI,{});
        console.log("Connected to Database!");

    } catch (err){
        console.error("Connect Error: ", err.message);
        process.exit(1);
    }
};
module.exports = connectDB;