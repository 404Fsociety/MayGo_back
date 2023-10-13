import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/connectDB.js'
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";



const app = express()

app.use(bodyParser.json({ limit : "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }))
app.use(cors())

app.use("/posts", postRoutes);
app.use("/user", userRouter);

app.get('/', (req,res) => {
    res.send("APP is runnig ...")
});

dotenv.config();

//connect to DB
connectDB()

//create port
const PORT = process.env.PORT || 7666

//create server
app.listen(PORT,(err)=>{
    err? console.log(err)
    :
    console.log(`server running on PORT : ${PORT}`)
})
