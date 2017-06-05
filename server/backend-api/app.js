var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');


var router = require('./routes/router');


var app = express();
var port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app);
app.listen(port);
console.log("Listening on port 3001...");

module.exports = app;
