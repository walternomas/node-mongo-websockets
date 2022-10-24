const store = require('./store');

function addUser(name) {
  if(!name) {
    return Promise.reject('Invalid user name provided');
  }
  const user = {
    name,
  }
  return store.add(user);
}

function listUsers(filterName) {
  return new Promise(resolve => resolve(store.list(filterName)));
}


module.exports = {
  addUser,
  listUsers,
}