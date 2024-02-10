const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "PATIENT", "DOCTOR"],
    required: true,
    default: "PATIENT",
  },
  active: {
    type: Boolean,
    required: true,
    default: false,
  },
  // dob  address
});

module.exports = mongoose.model("Hisusers", UserSchema);
