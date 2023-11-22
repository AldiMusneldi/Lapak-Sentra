import express from 'express';
import { getUsers, getUserById, createUser, register, updateUser, deleteUser } from '../controllers/UserController.js';
import { verifyUser } from '../middleware/Authuser.js';

const router = express.Router();

router.get('/users',verifyUser,getUsers);
router.get('/users/:id',verifyUser, getUserById);
router.post('/users',verifyUser, createUser);
router.post('/register/:role', register);
router.patch('/users/:id',verifyUser, updateUser);
router.delete('/users/:id',verifyUser, deleteUser);

export default router;