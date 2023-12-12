const express = require('express');
const { login, register, logout } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authUser');
const routes = express();

routes.post('/register', register);
routes.post('/login', login);
routes.post('/logout', logout);
// routes.get('/secure-route', authenticateToken);
module.exports = routes;
