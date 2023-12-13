const express = require('express');
const { login, register, logout } = require('../controllers/authController');

const { authenticateToken } = require('../middleware/authUser');
const { getAllKost } = require('../controllers/KostController');
const routes = express();

routes.post('/register', register);
routes.post('/login', login);
routes.post('/logout', logout);
routes.get('/kost', getAllKost);
// routes.get('/secure-route', authenticateToken);
module.exports = routes;
