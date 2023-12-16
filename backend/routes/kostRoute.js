const express = require('express');
const { getAllKost, createKost, updateKost, deleteKost, getKostById, getKostMe } = require('../controllers/KostController');
const { verifyUser } = require('../middleware/authUser');
const routes = express();

routes.get('/kost', getAllKost);
routes.get('/kost/:id', getKostById);
routes.get('/kost-me', verifyUser, getKostMe);
routes.post('/kost',verifyUser, createKost);
routes.put('/kost/:id',verifyUser, updateKost);
routes.delete('/kost/:id',verifyUser, deleteKost);

module.exports = routes;