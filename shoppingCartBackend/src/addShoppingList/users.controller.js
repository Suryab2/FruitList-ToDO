const { pushUser, fetchUser } = require("./users.service");

const addUser = async (req, res, next) => {
  const userName = req.body.userName;
  const role = req.body.role;
  await pushUser(userName, role);
  res.json("User Added Successfully");
};
const getUser = async (req, res) => {
  const result = await fetchUser();
  res.json(result);
};
module.exports = { addUser, getUser };
