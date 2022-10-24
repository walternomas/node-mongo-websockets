const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: 'public/files/',
});

router.get('/', function (req, res) {
  const filterMessages = req.query.chat || null;
  controller.getMessage(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList);
    })
    .catch((error) => {
      response.error(req, res, 'Unexpected Error', 500, error);
    });
});

router.post('/', upload.single('file'), function (req, res) {
  controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Información inválida', 400, 'Error en el controlador');
    });
});

router.patch('/:id', function (req, res) {
  console.log(req.params.id);
  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data);
    })
    .catch((err) => {
      response.error(req, res, 'Error interno', 500, err);
    });
});

router.delete('/:id', (req, res) => {
  controller.deleteMessage(req.params.id)
    .then(()=> {
      response.success(req, res, `Message ${req.params.id} deleted successfully`);
    })
    .catch((error) => {
      response.error(req, res, 'Error interno', 500, error);
    });
});

module.exports = router;