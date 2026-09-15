const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
    },
  });
};

module.exports = {
  signup,
};