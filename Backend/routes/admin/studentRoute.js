const express = require("express");
const router = express.Router()
const StudentController = require("../../controllers/admin/StudentController")
router.route("/").post(StudentController.create);
// router.route("/find").post(StudentFormController.findAll);
// router.route("/delete/:id").delete(StudentFormController.deleteById);
// router.route("/update/:id").put(StudentFormController.updatebyId);
module.exports = router