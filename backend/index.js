const express = require('express');
const cors = require('cors');
const { timeStamp } = require('console');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/test' , (req,res)=>{
    const data = {
      message: 'Ini Test kalau nampak dapat' 
    };
    res.json(data);
});

app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})