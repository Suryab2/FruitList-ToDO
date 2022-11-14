const express = require("express");
const app = express();
const shoppingListrouter = require("./shoppingList/shoppingList.router");
const addListRouter = require("./addShoppingList/addShoppingList.router");
const addUserRouter = require("./addShoppingList/users.router");
var bodyParser = require("body-parser");
const cors = require("cors");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cors());
app.use("/todo", shoppingListrouter, addListRouter, addUserRouter);

module.exports = app;
