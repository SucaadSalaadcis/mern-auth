import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // initialize
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
mongoose.connect(process.env.MONGO).then (()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err)
})

const app = express();

app.listen(3000, () => {
  console.log("Server Starting....")
});


app.use('/api/user',userRoutes);