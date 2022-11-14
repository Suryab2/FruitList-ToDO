const {
  addShoppingList,
  deleteShoppingList,
  editShoppingList,
} = require("./addShoppingList.service");

const addList = async (req, res, next) => {
  const itemname = req.body.text;
  const user_id = req.body.uid;
  const addItem = await addShoppingList(itemname, user_id);
  res.json("added");
};
const deleteList = async (req, res, next) => {
  const itemid = req.body.id;
  const deleteItem = await deleteShoppingList(itemid);
  res.json(deleteItem);
};
const editList = async (req, res, next) => {
  const itemid = req.body.id;
  const itemname = req.body.text;
  const editItem = await editShoppingList(itemid, itemname);
  res.json("edited");
};
module.exports = { addList, deleteList, editList };
