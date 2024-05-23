import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./db.js";
import express from 'express'
import cors from 'cors'

// Routes
import ProductRoutes from "./routes/ProductRoutes.js";




connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())


// app.use('/api/products',ProductRoutes)
app.use('/api/products',ProductRoutes)
const port = 5000;

app.get('/',(req,res)=>{
    res.send('Hello krishna this world is yours')
})






app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})