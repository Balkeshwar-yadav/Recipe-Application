
import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from'./routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin:true,
    method:["GET","PUT","PATCH","POST","DELETE"],
    credentials:true
}))

// userRouter
app.use('/api',userRouter)


//recipeRouter
app.use('/api',recipeRouter)

mongoose.connect("mongodb+srv://root:4089@cluster1.leuoiaz.mongodb.net/?appName=Cluster1",
    {
        dbName:"Mern_Food_Recipe",
    }
).then(()=>console.log("MongoDb Connnected...!")).catch((err)=>console.log(err));


const port = 3000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));