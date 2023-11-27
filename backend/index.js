import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequlizeStore from "connect-session-sequelize";
import AuthRoute from "./routes/AuthRoute.js"
import UserRoute from "./routes/UserRoute.js"
import KostRoute from "./routes/KostRoute.js"
dotenv.config();

const app = express();
const sessionStore = SequlizeStore(session.Store);
const store = new sessionStore({
  db: db
});

// (async()=>{
//   await db.sync();
// })();

const port = process.env.APP_PORT;

app.use(session({
  secret: process.env.SESS_SECRET,
  resave:false,
  saveUninitialized:true,
  store:store,
  cookie:{
    secure:'auto'
  }
}));

app.use(cors({
  credentials:true,
  origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use(AuthRoute);
app.use(UserRoute);
app.use(KostRoute);

app.get('/', (req, res) => {
  res.send('Testing Server');
});

// store.sync();

app.listen(port, () => {
  console.log(`Server sedang berjalan ${port}`);
});
