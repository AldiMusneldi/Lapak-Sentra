import express from "express";
import { getKost, createKost, updateKost, deleteKost, kostMe, kostById, detailKost } from "../controllers/KostController.js";
import { ownerKost, verifyUser } from '../middleware/Authuser.js';

const router = express.Router();

router.get('/kosts',getKost);
router.get('/kosts/detail/:id',detailKost);
router.get('/kosts/me',verifyUser,kostMe);
router.get('/kosts/:id',verifyUser,kostById);
router.post('/kosts',verifyUser,ownerKost,createKost);
router.patch('/kosts/:id',verifyUser,ownerKost, updateKost);
router.delete('/kosts/:id',verifyUser,ownerKost, deleteKost);
export default router;