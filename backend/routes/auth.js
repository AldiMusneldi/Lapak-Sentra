const express = require('express');
const { login, register, logout } = require('../controllers/authController');
const { authenticateToken, verifyUser,  } = require('../middleware/authUser');
const { me } = require('../controllers/userController');
const routes = express();

routes.post('/register', register);
routes.post('/login', login);
routes.get('/logout', logout);
routes.get('/me',verifyUser, me);
// routes.get('/secure-route', authenticateToken);
module.exports = routes;
