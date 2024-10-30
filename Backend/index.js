


import { config } from './config.js';
import express, { Router } from 'express';
import mongoose from 'mongoose';
import router from './routes.js';
import cors from 'cors';




const app=express();
app.use(express.json());
app.use(cors());

mongoose
.connect(config.dbUrl)
.then(()=>{
    console.log("Databases is connected sucessfully")
});
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],

  }));
app.use("/",router)

app.listen(config.port,()=>{
    console.log(`server is running on port ${config.port}`)
})


