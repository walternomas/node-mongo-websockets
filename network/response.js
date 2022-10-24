const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal Server Error'
};

exports.success = function (req, res, message, status = 200) {
  if(!message) message = statusMessages[status];
  res.status(status).send({
    error: '',
    body: message
  });
};

exports.error = function (req, res, message, status = 500, details) {
  console.error('[response error] ' + details);
  if(!message) message = statusMessages[status];
  res.status(status).send({
    error: message,
    body: ''
  });
};