const query = require('../config/Database');

// menampilkan semua data kost
const GetAllKost = () => {
  const SQLQuery = 'SELECT * FROM kosts ORDER BY createdAt DESC';
  return query(SQLQuery);
};

module.exports = {
  GetAllKost,
};
