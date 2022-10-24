const Model = require('./model');

async function listUsers(filterName) {
  let filter = filterName ? { name: new RegExp(`^${filterName}$`, "i") } : {};
  const users = await Model.find(filter);
  return users;
}

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

module.exports = {
  add: addUser,
  list: listUsers,
}