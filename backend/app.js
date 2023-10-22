import mongoose from 'mongoose';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT||3000;

// DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("DB CONNECTED");
}).catch(()=>{
    console.log("Unable to connect DB");
})

// using middleware
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors);

// Starting a server
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

app.get("/", (req,res)=>{
    res.send("Hello")
})