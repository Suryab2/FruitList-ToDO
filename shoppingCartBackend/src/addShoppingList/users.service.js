const knexInstance = require("../database/connection");
const { default: knex } = require("knex");

const pushUser = async (userName, role) => {
  const result = await knexInstance
    .insert({ user_name: userName, role: role })
    .into("users");
  return result;
};
const fetchUser = async () => {
  const result = await knexInstance("users").select("*");
  return result;
};
module.exports = { pushUser, fetchUser };
