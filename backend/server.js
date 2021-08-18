import express from 'express'
import products from '../backend/data/products.js'
import dotenv from 'dotenv'
import connectDB from '../backend/config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product = products.find(p=>p._id===req.params.id)
    if(!product)return res.status(404).json({msg:`Could not find product with ID ${req.params.id}`})
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))