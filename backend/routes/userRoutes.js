import express from 'express';
import { authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleWare.js';

const router = express.Router();

router.post('/login', authUser);

router.route('/profile').get(protect, getUserProfile);

//router.route('/:id').get(getProductById);

export default router;
