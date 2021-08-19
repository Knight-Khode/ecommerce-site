import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from '../backend/data/users.js'
import products from '../backend/data/users.js'
import Product from '../backend/models/productModel.js'
import User from '../backend/models/userModel.js'
import Order from '../backend/models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers= await User.inserMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = Products.map(product=>{
            return{...product,user:adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data imported')
        process.exit()
    }catch(error){
        console.error(error.message)
        process.exit(1)
    }
}



const destroytData = async () =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
      
        console.log('Data destroyed')
        process.exit()
    }catch(error){
        console.error(error.message)
        process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    destroytData()
}else{
    importData()
}