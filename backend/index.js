import express from "express";
// import cors from "cors";
// import session from "express-session";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.APP_PORT;

app.get('/', (req, res) => {
  res.send('Testing Server');
});

app.listen(port, () => {
  console.log(`Server sedang berjalan ${port}`);
});
