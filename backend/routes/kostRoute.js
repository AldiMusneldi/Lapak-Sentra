const express = require('express');
const { getAllKost, createKost, updateKost, deleteKost, getKostById, getKostMe } = require('../controllers/KostController');
const { verifyUser } = require('../middleware/authUser');
const routes = express();

// tampilkan semua data
routes.get('/kost', getAllKost);
// tampilkan data dengan sesuai dengan id
routes.get('/kost/:id', getKostById);
routes.get('/kost-me', verifyUser, getKostMe);
// membuat data
routes.post('/kost', verifyUser, createKost);
// update data
routes.put('/kost/:id', verifyUser, updateKost);
// hapus data
routes.delete('/kost/:id', verifyUser, deleteKost);

module.exports = routes;
