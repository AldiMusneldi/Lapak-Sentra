const query = require('../config/Database');
const { randomUUID } = require('crypto');
const multer = require('multer');
const upload = multer({ dest: '/../storage/kosts/' });
// import models
const userModels = require('../models/kost');

async function getAllKost(req, res) {
  try {
    const response = await userModels.GetAllKost();
    if (response) {
      res.status(200).json({ status: 200, data: response, message: 'Resources Kost Succsessfully' });
    } else {
      res.status(404).json({ status: 404, message: 'Resources tidak ditemukan' });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
}

async function getKostById(req, res) {
  try {
    const response = await query('SELECT * FROM kosts WHERE uuid = ? ORDER BY createdAt DESC', [req.params.id]);
    if (response) {
      res.status(200).json({ status: 200, data: response, message: 'Resources Kost Succsessfully' });
    } else {
      res.status(404).json({ status: 404, message: 'Resources tidak ditemukan' });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
}

async function getKostMe(req, res) {
  try {
    const userId = req.id;
    const response = await query('SELECT * FROM kosts WHERE userId = ? ORDER BY createdAt DESC', [userId]);
    if (response) {
      res.status(200).json({ status: 200, data: response, message: 'Resources Kost Succsessfully' });
    } else {
      res.status(404).json({ status: 404, message: 'Resources tidak ditemukan' });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
}

async function createKost(req, res) {
  try {
    const { name, price, type_kost, category_kost, land_size, address, facility, nearest_place, description } = req.body;
    console.log(req.body);
    const now = new Date();
    const userId = req.id;
    if (
      name === undefined ||
      name === '' ||
      price === undefined ||
      price === '' ||
      type_kost === undefined ||
      type_kost === '' ||
      category_kost === undefined ||
      category_kost === '' ||
      land_size === undefined ||
      land_size === '' ||
      address === undefined ||
      address === '' ||
      facility === undefined ||
      facility === '' ||
      nearest_place === undefined ||
      nearest_place === '' ||
      description === undefined ||
      description === ''
    )
      return res.status(400).json({ status: 400, msg: 'Invalid data! All fields are required.' });
    await query('START TRANSACTION');
    const kostId = randomUUID();
    await query(
      `
        INSERT INTO kosts (
            uuid, name, price, type_kost,category_kost, land_size, address, facility, nearest_place, description,userId, createdAt, updatedAt
        ) VALUES (
            ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        );
    `,
      [kostId, name, price, type_kost, category_kost, land_size, address, facility, nearest_place, description, userId]
    );

    // Proses upload gambar menggunakan multer
    upload.array('images')(req, res, async function (err) {
      if (err) {
        // Rollback transaksi SQL jika terjadi kesalahan upload
        await query('ROLLBACK');
        return res.status(500).json({ status: 500, msg: err.message });
      }

      // Tambahkan data ke tabel imageKosts
      for (const file of req.files) {
        await query(
          `
            INSERT INTO image_kost (kost_id, name, createdAt) VALUES (?, ?, ?);
          `,
          [kostId, file.path, now]
        );
      }

      // Commit transaksi SQL
      await query('COMMIT');

      return res.status(201).json({ status: 201, msg: 'Create kost success' });
    });
  } catch (error) {
    await query('ROLLBACK');
    return res.status(500).json({ status: 500, msg: error.message });
  }
}

async function updateKost(req, res) {
  try {
    const { name, price, type_kost, land_size, address, facility, nearest_place, description } = req.body;
    console.log(req.body);
    const now = new Date();
    const userId = req.id;
    const requiredFields = [name, price, type_kost, land_size, address, facility, nearest_place, description];

    if (requiredFields.some((field) => field === undefined || field === '')) {
      return res.status(400).json({ status: 400, msg: 'Invalid data! All fields are required.' });
    }

    const kostExists = await query(
      `
        SELECT 1
        FROM kosts
        WHERE uuid = ? AND userId = ?
      `,
      [req.params.id, userId]
    );

    if (!kostExists.length) {
      return res.status(403).json({ status: 403, msg: "Kost not found or you don't have permission to update." });
    }

    await query(
      `
        UPDATE kosts
        SET name = ?, price = ?, type_kost = ?, land_size = ?, address = ?,
            facility = ?, nearest_place = ?, description = ?, updatedAt = ?
        WHERE uuid = ? AND userId = ?
      `,
      [name, price, type_kost, land_size, address, facility, nearest_place, description, now, req.params.id, userId]
    );
    return res.status(200).json({ status: 200, msg: 'Edit Kost success' });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
}

async function deleteKost(req, res) {
  try {
    const userId = req.id;
    const uuid = req.params.id;
    await query(`DELETE from kosts where uuid = ? AND userId = ?`, [uuid, userId]);
    return res.status(200).json({ status: 200, msg: 'Delete Kost Success' });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
}

module.exports = {
  getAllKost,
  getKostById,
  getKostMe,
  createKost,
  updateKost,
  deleteKost,
};
