const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // account doesn't exist with this email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }
    if (user.active == false) {
      return res
        .status(400)
        .json({ success: false, message: "Your account is not active" });
    }

    // compare password
    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Passsword" });
    }

    // sign the token for you
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        name: user.name,
      },
      process.env.TOKEN_SECRET
    );

    return res
      .status(200)
      .json({ success: true, message: "Login Success", accessToken: token });
  } catch (err) {
    return res.status(500).json({ success: false, messaeg: err.message });
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, phoneNumber, password, gender } = req.body;

    // Check if email already exist
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email already taken." });
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 6);
    console.log(hashedPassword);

    // create one account
    const newUser = await User.create({
      name,
      email,
      gender,
      phoneNumber,
      password: hashedPassword,
    });

    // send activation email
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "a.m2001nov@gmail",
        pass: "yedhcspgxsfnwtbh",
      },
    });

    // Prep
    const token = jwt.sign(
      {
        _id: newUser._id,
        email: newUser.email,
        name: newUser.name,
      },
      process.env.TOKEN_SECRET
    );

    const url = `http://localhost:3001/auth/verify/${token}`;

    let mailDetails = {
      from: "a.m2001nov@gmail",
      to: email,
      subject: "Activate your Account",
      text: `Click on the following url to activate your email \n ${url} `,
    };

    // sending the email
    // mailTransporter.sendMail(mailDetails);
    console.log(url);

    return res.status(200).json({
      success: true,
      message: "Email has been sent to activate your account",
    });
  } catch (err) {
    return res.status(500).json({ success: false, messaeg: err.message });
  }
};

const verifyAccount = async (req, res) => {
  const { token } = req.params;
  try {
    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    await User.findByIdAndUpdate(decoded._id, { active: true });
    return res.status(200).json({
      success: true,
      message: "Your account is activated now you can login",
    });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: "Link Corrupted or Expired" });
  }
};

module.exports = { login, signup, verifyAccount };
