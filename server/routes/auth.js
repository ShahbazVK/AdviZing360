const express = require("express");
const { register, login, logout } = require("../controllers/auth");
const router = express.Router();

router.route("/logout").get(logout);
router.route("/register").post(register);
router.route("/login").post(login);
module.exports = router;
