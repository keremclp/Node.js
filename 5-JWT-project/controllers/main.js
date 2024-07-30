const login = async (req, res) => {
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
