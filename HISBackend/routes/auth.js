const express = require("express");
const {
  login,
  signup,
  verifyAccount,
  changePassword,
} = require("../controllers/auth");

const { isLoggedIn } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/verify/:token", verifyAccount);

router.put("/change-password", isLoggedIn, changePassword);

module.exports = router;
