const express = require("express");
const router = express.Router();
const { addUser, getUser } = require("./users.controller");

router.route("/adduser").post(addUser);
router.route("/getuser").get(getUser);
module.exports = router;
