const express = require('express');
const { login, register, logout } = require('../controllers/authController');
<<<<<<< HEAD
const { authenticateToken, verifyUser } = require('../middleware/authUser');
const { me } = require('../controllers/userController');
const { getAllKost } = require('../controllers/KostController');
=======
const { verifyUser,  } = require('../middleware/authUser');
const { me } = require('../controllers/userController');


>>>>>>> 9cde9c170765d6c415ab40d7a405c36edf900266
const routes = express();

routes.post('/register', register);
routes.post('/login', login);
routes.get('/logout', logout);
<<<<<<< HEAD
routes.get('/me', verifyUser, me);
routes.get('/kost', getAllKost);
// routes.get('/secure-route', authenticateToken);
=======
routes.get('/me',verifyUser, me);

>>>>>>> 9cde9c170765d6c415ab40d7a405c36edf900266
module.exports = routes;
