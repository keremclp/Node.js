const CustomAPIError = require('../errors/custom-error')
const login = async (req, res) => {
    const { username, password } = req.body
    if(!username || !password){
        throw new CustomAPIError('Please provide username and password', 400)
    }
    console.log(username, password);
    res.send("Fake login/register/signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({
      msg: `Hello, Kerem Can`,
      secret: `Here is your authroized data: ${luckyNumber}`,
    });
};

module.exports = {
  login,
  dashboard,
};
