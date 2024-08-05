const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')

const createProduct = async(req,res)=>{
    res.send('create product')
}
const getAllProduct = async(req,res)=>{
    res.send('get all product')
}

module.exports = {
    createProduct,
    getAllProduct
}

