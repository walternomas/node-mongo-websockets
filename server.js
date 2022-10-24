const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const path = require('path');
const db = require('./db');
require("dotenv").config({ path: ".env" });
const router = require('./network/routes');
const port = process.env.PORT;

db(process.env.DB_URL);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use('/app', express.static(path.join(__dirname, 'public')));

server.listen(port, function () {
  console.log(`starting server on port ${port}: http://localhost:${port}`);
});