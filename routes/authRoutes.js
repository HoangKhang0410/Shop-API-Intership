import Router from 'express';
import authControllers from '../controllers/authController.js';

const router = Router();

router.post('/register', authControllers.register);
// router.post('/login');

export default router;
