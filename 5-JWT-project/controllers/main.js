const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
const login = async (req, res) => {
    const { username, password } = req.body
    if(!username || !password){
        throw new CustomAPIError('Please provide username and password', 400)
    }
    
    const id = new Date().getDate()
    
    const token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn:'30d'})
    res.status(201).json({msg: 'user created', token})

    console.log(username, password);
};

const dashboard = async (req, res) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization
  console.log(authHeader);
  if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new CustomAPIError("No token provided", 401); 
  }
  const token = authHeader.split(' ')[1]
  // console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // console.log(decoded);
    const luckyNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .json({
        msg: `Hello, ${decoded.username}`,
        secret: `Here is your authroized data: ${luckyNumber}`,
      });
  } catch (error) {
    throw new CustomAPIError("Not authorized to access this route", 401); 
  }
    
};

module.exports = {
  login,
  dashboard,
};
