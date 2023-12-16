const express = require("express");
const app = express();
const auth = require("./auth");
const kost = require('./kostRoute');
const imageRoute = require('./imageRoute');
const apiUrl = "/api/v1";

app.use(apiUrl, auth);
app.use(apiUrl,kost);
app.use(apiUrl,imageRoute);

module.exports = app;
