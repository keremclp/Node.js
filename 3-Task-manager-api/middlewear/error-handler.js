const { CustomAPIError } = require('../errors/custom-error')
 
const errorHandlerMiddlewear = (err,req,res,next) => {
    if(err instanceof CustomAPIError) {
        res.status(err.statusCode).json({ msg: err.message })
    } 
    return res.status(500).json({ msg: 'Something went wrong!'})
    
}

module.exports = errorHandlerMiddlewear