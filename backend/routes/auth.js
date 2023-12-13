const express = require('express');
const { login, register, logout } = require('../controllers/authController');
<<<<<<< HEAD
const { authenticateToken, verifyUser,  } = require('../middleware/authUser');
const { me } = require('../controllers/userController');
=======

const { authenticateToken } = require('../middleware/authUser');
const { getAllKost } = require('../controllers/KostController');
>>>>>>> 8570c536fc3931d3484e8367b5ad6286a561fbc5
const routes = express();

routes.post('/register', register);
routes.post('/login', login);
<<<<<<< HEAD
routes.get('/logout', logout);
routes.get('/me',verifyUser, me);
=======
routes.post('/logout', logout);
routes.get('/kost', getAllKost);
>>>>>>> 8570c536fc3931d3484e8367b5ad6286a561fbc5
// routes.get('/secure-route', authenticateToken);
module.exports = routes;
