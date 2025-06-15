import express from 'express';
import { registerUser,loginUser,getProfile } from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/users/register
// @desc    Register new user
// @access  Public
router.post('/register', registerUser);
router.post('/login',loginUser);
router.get('/profile',protect,getProfile);

export default router;