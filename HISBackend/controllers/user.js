const User = require("../models/User");

const updateProfile = async (req, res) => {
  const { name, phone, about, address } = req.body;

  // Validation
  if (!name || name.length < 3)
    return res
      .status(400)
      .json({ success: false, message: "Name should be minimum 3 chars" });

  try {
    await User.findByIdAndUpdate(req.user._id, {
      name: name,
      phoneNumber: phone,
      about: about,
      address: address,
    });

    return res.status(200).json({ success: true, message: "Details Updated" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const updateProfliePhoto = async (req, res) => {
  if (req.file) {
    await User.findByIdAndUpdate(req.user._id, {
      imgUrl: req.file.location,
    });
    return res.status(200).json({
      success: true,
      message: "Profile Photo uploaded",
      imgUrl: req.file.location,
    });
  }
  return res
    .status(400)
    .json({ success: false, message: "File is not provided" });
};

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: "DOCTOR", active: true });

    return res.status(200).json({ success: true, doctors });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const getAllpatients = async (req, res) => {
  try {
    const patients = await User.find({ role: "PATIENT", active: true });

    return res.status(200).json({ success: true, patients });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = {
  updateProfile,
  updateProfliePhoto,
  getAllDoctors,
  getAllpatients,
};
