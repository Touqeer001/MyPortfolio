
import dotenv from 'dotenv'
import express from "express";
import cors from 'cors';


//dotenv configuration
dotenv.config();


//rest object
const app=express();

//middleware
app.use(cors());
app.use(express.json());

//rotes
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Node Server</h1>');
})


//port
const PORT=process.env.PORT || 8000;


//listen
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})