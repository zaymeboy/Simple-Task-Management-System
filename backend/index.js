//Import segala barang
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

//taktau jangan buang
const cors = require('cors');

//Load environment variable
dotenv.config();

//taktau jangan buang
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

//Connect to DB
connectDB();

//Middleware
app.use(express.json());

//API Routes
app.use('/user', userRoutes);
app.use('/task', taskRoutes);

//cth API
app.get('/', (req,res)=>{
  res.send("API is running...")
});

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})