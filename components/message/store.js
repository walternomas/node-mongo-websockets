const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

// async function getMessage(filterUser) {
//   // let filter = {};
//   // if(filterUser !== null) {
//   //   //filter = { user: filterUser };
//   //   //filter.user = new RegExp(user, "i");
//   //   filter = { user: new RegExp(`^${filterUser}$`, "i") };
//   // }
//   let filter = filterUser ? { user: new RegExp(`^${filterUser}$`, "i") } : {};
//   const messages = await Model.find(filter);
//   return messages;
// }

function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = filterUser ? { user: new RegExp(`^${filterUser}$`, "i") } : {};
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      })
  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findById(id);
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

async function removeMessage(id) {
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
}