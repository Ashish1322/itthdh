const express = require("express");

const {
  createDoctor,
  getAllDoctors,
  createDepartment,
  getAllDepartments,
} = require("../controllers/admin");

const router = express.Router();

router.get("/", getAllDoctors);
router.post("/create", createDoctor);
router.get("/departments", getAllDepartments);
router.post("/department/create", createDepartment);

module.exports = router;
