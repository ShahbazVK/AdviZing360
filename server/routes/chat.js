const express = require("express");
const { sendMessage, getPreviousMessages } = require("../controllers/chat");
const router = express.Router();

router.route("/send-message").post(sendMessage);
router.route("/get-messages").get(getPreviousMessages);

module.exports = router;
