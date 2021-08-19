import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../backend/config/db.js'

import productRoutes from '../backend/routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))