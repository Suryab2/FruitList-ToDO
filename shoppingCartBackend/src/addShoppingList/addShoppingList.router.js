const express = require("express");
const router = express.Router();
const {
  addList,
  deleteList,
  editList,
} = require("./addShoppingList.controller");

router.route("/addList").post(addList);
router.route("/deleteList").delete(deleteList);
router.route("/editList").post(editList);

module.exports = router;
