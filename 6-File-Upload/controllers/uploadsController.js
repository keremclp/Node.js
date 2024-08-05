const path = require('path')
const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
    let producImage = req.files.image

    const imagePath = path.join(__dirname, '../public/uploads/'+`${producImage.name}`)    
    await producImage.mv(imagePath)
    return res.status(StatusCodes.OK).json({ image:{src:`/uploads/${producImage.name}`} })

};


module.exports = {
    uploadProductImage
};
