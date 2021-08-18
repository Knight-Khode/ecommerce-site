const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product = products.find(p=>p._id===req.params.id)
    if(!product)return res.status(404).json({msg:`Could not find product with ID ${req.params.id}`})
    res.json(product)
})

app.listen(5000,console.log(`Listening to port 5000`))