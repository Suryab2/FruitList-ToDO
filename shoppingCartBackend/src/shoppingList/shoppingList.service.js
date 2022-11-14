const knexInstance = require("../database/connection");

const getShoppingList = async (listid) => {
  const result = await knexInstance("shoppinglist")
    .select("*")
    .where("item_id", listid)
    .first();
  return result;
};
const displayList = async () => {
  const result = await knexInstance("shoppinglist").select("*");
  return result;
};

module.exports = { getShoppingList, displayList };
