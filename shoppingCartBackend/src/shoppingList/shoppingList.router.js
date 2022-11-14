const express = require("express");
const router = express.Router();
const {
  fetchShoppingList,
  displayShoppingList,
} = require("./shoppingList.controller");

router.route("/shoppingList/:listId").get(fetchShoppingList);
router.route("/shoppingList").get(displayShoppingList);
module.exports = router;
