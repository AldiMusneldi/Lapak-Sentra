const query = require('../config/Database');

async function getAllKost(req, res) {
  try {
    // Assuming query is a function that returns a promise
    const response = await query('SELECT * FROM kosts');

    if (response) {
      res.status(200).json({ data: response, message: 'Resources Kost Succsessfully' });
    } else {
      res.status(404).json({ message: 'Resources tidak ditemukan' });
    }
  } catch (error) {
    console.error(error.message);

    // Send an error response to the client
    res.status(500).json({ error: 'Internal Server Error' });

    // Optionally, rethrow the error to be caught by a global error handler
    throw error;
  }
}

module.exports = {
  getAllKost,
};
