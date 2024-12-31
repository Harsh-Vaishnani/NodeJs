
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const user = new User({ username, password, role });
    await user.save();
    res.redirect("/login");
  } catch (err) {
    res.status(500).send("Registration Error");
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).send("Invalid Credentials");

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("jwt", token, { httpOnly: true });
    res.redirect("/products");
  } catch (err) {
    res.status(500).send("Login Error");
  }
};

exports.logout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/login");
};
            