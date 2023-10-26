const express = require("express");
const { getUser, register, login } = require("../controllers/auth");
const router = express.Router();

router.route("/").get(getUser);
router.route("/register").post(register);
router.route("/login").post(login);
module.exports = router;
