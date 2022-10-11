const express = require('express');
const app = express();
const path = require('path');
const config = require('./config');

var dir = path.join(__dirname, '/public');

app.use(express.static(dir));

app.listen(config.port, function () {
    console.log(`Listening on ${config.baseUrl}:${config.port}/`);
});