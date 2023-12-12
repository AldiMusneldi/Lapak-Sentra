
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createServer } = require("http");
const routes = require("./routes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.APP_PORT;
const server = createServer(app);

app.use(
   cors({
      credentials: true,
      origin: 'http://localhost:5173',
   })
);

app.use(bodyParser.json());
app.use(routes);

server.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));
