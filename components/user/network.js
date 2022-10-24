const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function (req, res) {
  controller.addUser(req.body.name)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(e => {
      response.error(req, res, 'Internal Error', 500, e);
    });
});

router.get('/', function (req, res) {
  const filterUsers = req.query.name || null;
  controller.listUsers(filterUsers)
    .then((userList) => {
      response.success(req, res, userList);
    })
    .catch((error) => {
      response.error(req, res, 'Internal Error', 500, error);
    });
});

module.exports = router;