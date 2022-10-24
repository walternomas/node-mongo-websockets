const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/:userId', function (req, res) {
  controller.listChats(req.params.userId)
    .then(users => {
      response.success(req, res, users);
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err);
    });
});

router.post('/', function (req, res) {
  controller.addChat(req.body.users)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err);
    });
});

module.exports = router;