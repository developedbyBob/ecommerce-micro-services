import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Conexão com o banco de dados
connectDB();

app.use(express.json());

// ROTAS
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Auth Service running on port ${port}`);
});
