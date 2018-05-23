var express = require('express');
var consign = require('consign');
global.__basedir = __dirname;


const app = express();
app.use('/', express.static('public'));
consign()
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);



