//Import segala barang
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

//taktau jangan buang
const cors = require('cors');

//Load environment variable
dotenv.config();

//taktau jangan buang
app.use(cors());

//Connect to DB
connectDB();

//Middleware
app.use(express.json());

//API Routes
app.use('/user', userRoutes);

//cth API
app.get('/', (req,res)=>{
  res.send("API is running...")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})