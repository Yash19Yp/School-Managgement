const express = require("express");
const router = express.Router();
const StudentRoutes = require("./studentRoute");
router.use("/student", StudentRoutes);
module.exports = router;
