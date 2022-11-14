const knexInstance = require("../database/connection");

const addShoppingList = async (itemname, user_id) => {
  const result2 = await knexInstance
    .insert({ itemname: itemname, user_id: user_id })
    .into("shoppinglist");
  return result2;
};

const deleteShoppingList = async (itemid) => {
  const result3 = await knexInstance("shoppinglist")
    .where("item_id", itemid)
    .del();
  return result3;
};

const editShoppingList = async (itemid, itemname) => {
  const result4 = await knexInstance("shoppinglist")
    .where("item_id", itemid)
    .update("itemname", itemname);
  return result4;
};
module.exports = { addShoppingList, deleteShoppingList, editShoppingList };
