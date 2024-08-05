const path = require('path')
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const uploadProductImage = async (req, res) => {
    //check if file exists
    if(!req.files){
        throw new CustomError.BadRequestError("No file uploaded");
    }
    
    const producImage = req.files.image
    // check format
    if(!producImage.mimetype.startsWith('image')){
        throw new CustomError.BadRequestError("Please upload an image file");
    }
    
    // check the size
    const maxSize = 1024*1024
    if(producImage.size > maxSize){
        throw new CustomError.BadRequestError("Please upload an image smaller than 1KB");
    }
    
    const imagePath = path.join(__dirname, '../public/uploads/'+`${producImage.name}`)    
    await producImage.mv(imagePath)
    return res.status(StatusCodes.OK).json({ image:{src:`/uploads/${producImage.name}`} })

};


module.exports = {
    uploadProductImage
};
