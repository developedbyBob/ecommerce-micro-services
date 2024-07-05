import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rota de Registro de Usuário
router.post('/register', registerUser);

// Rota de Login
router.post('/login', loginUser);

// Rota para pegar os dados do usuário (Protegida)
router.get('/profile', authMiddleware, getUserProfile);

export default router;
