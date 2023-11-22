import express from "express";
import { getKost } from "../controllers/KostController.js";

const router = express.Router();

router.get('/kosts',getKost);
export default router;