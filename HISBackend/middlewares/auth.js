// Ensuer the Login
const jwt = require("jsonwebtoken");
const isLoggedIn = (req, res, next) => {
  try {
    // try to validate the token
    const token = req.headers.authorization;
    var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: err.message });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role == "ADMIN") {
    next();
  } else {
    return res
      .status(401)
      .json({ success: false, message: "You Don't have access to this route" });
  }
};

const isDoctor = (req, res, next) => {
  if (req.user && req.user.role == "DOCTOR") {
    next();
  } else {
    return res
      .status(401)
      .json({ success: false, message: "You Don't have access to this route" });
  }
};

const isPatient = (req, res, next) => {
  if (req.user && req.user.role == "PATIENT") {
    next();
  } else {
    return res
      .status(401)
      .json({ success: false, message: "You Don't have access to this route" });
  }
};
module.exports = { isLoggedIn, isAdmin, isDoctor, isPatient };
