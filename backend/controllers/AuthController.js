const query = require("../config/Database");
const { randomUUID } = require("crypto");
const bcryptjs = require("bcryptjs");
const  jwt  = require("jsonwebtoken");

async function register(req, res) {
    const { name, email, phoneNumber, password, confPassword, role } = req.body;
  console.log(req.body);
    if (
      name === undefined ||
      name === "" ||
      email === undefined ||
      email === "" ||
      phoneNumber === undefined ||
      isNaN(+phoneNumber) ||
      password === undefined ||
      password === "" ||
      confPassword === undefined ||
      confPassword === "" ||
      role === undefined ||
      role === "" 
      
    )
      return res.status(400).json("Invalid data!");
  
    if (password !== confPassword) return res.status(400).json("Password not match!");
  
    try {
      // logic handling
      const isDuplicate = await query(
        `
          SELECT id FROM users WHERE phone_number = ? OR email = ? 
      `,
        [phoneNumber, email]
      );
  
      if (isDuplicate.length > 0) return res.status(400).json("User already exists!");
  
      const salt = await bcryptjs.genSalt(12);
      const hash = await bcryptjs.hash(password, salt);
      const now = new Date();
      await query(
        `
          INSERT INTO users (
              uuid, name, email, phone_number, password, role, createdAt, updatedAt
          ) VALUES (
              ?, ?, ?, ?, ?, ?, ?, ?
          );
      `,
        [randomUUID(), name, email, phoneNumber, hash, role, now, now]
      );
  
      return res.status(200).json("Register success!");
    } catch (error) {
      return res.status(400).json("Something went wrong!");
    }
  }

  async function login(req, res) {
    const { email, password } = req.body;
  
    if (email === undefined || email === '' || password === undefined || password === '')
      return res.status(400).json('Data tidak valid!');
  
    try {
      // Periksa apakah pengguna ada
      const user = await query('SELECT * FROM users WHERE email = ?', [email]);
      console.log(user);
  
      if (user.length > 0) {
        const storedPassword = user[0].password;
  
        // Bandingkan password yang di-hash
        const passwordMatch = await bcryptjs.compare(password, storedPassword);
  
        if (passwordMatch) {
          const id = user[0].id;
          const name = user[0].name;
          const token = jwt.sign({ id,name }, "secretKey", { expiresIn: 3000 })
          res.cookie('token', token);
          return res.json({ login: true, token, user });
        } else {
          return res.status(401).json({ login: false, message: 'Email atau password salah' });
        }
      } else {
        return res.status(401).json({ login: false, message: 'Email atau password salah' });
      }
    } catch (error) {
      console.error('Error saat login:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  function logout(req, res) {
    res.clearCookie('token');
   return  res.json({ Status: 'Success' });
  }
  

  async function secureRoute(req, res) {
    // Access the user information from the request object (added by the verifyToken middleware)
    const user = req.user;
  
    try {
      // You can perform actions related to the secure route here
      return res.json({ message: 'Secure route accessed successfully!', user });
    } catch (error) {
      console.error('Error in secureRoute:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

  module.exports = {
    register,
    login,
    logout,
    secureRoute
  };
  