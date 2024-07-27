const errorHandlerMiddlewear = (err,req,res,next) => {
    return res.status(500).json({ msg:`something ${err}` })
}

module.exports = errorHandlerMiddlewear