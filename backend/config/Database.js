const mysql = require('mysql2/promise')
const dotenv = require("dotenv");
dotenv.config();


const db = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
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
