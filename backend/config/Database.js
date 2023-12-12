const mysql = require('mysql2/promise')


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "lapaksentra",
  password: "",
  connectionLimit: 10,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

async function query(query, value) {
  try {
    const [executeQuery] = await db.query(query, value ?? []); // hasil dari query
    return executeQuery;
  } catch (error) {
    console.log(error);
  }
}

module.exports = query;
