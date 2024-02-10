const express = require("express");
const { login, signup, verifyAccount } = require("../controllers/auth");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/verify/:token", verifyAccount);

module.exports = router;
