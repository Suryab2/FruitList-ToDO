const { getShoppingList, displayList } = require("./shoppingList.service");

const fetchShoppingList = async (req, res, next) => {
  const listId = Number(req.params.listId);
  const foundList = await getShoppingList(listId);
  res.json({ data: foundList });
};
const displayShoppingList = async (req, res, next) => {
  const foundList = await displayList();
  res.json(foundList);
};

module.exports = { fetchShoppingList, displayShoppingList };
