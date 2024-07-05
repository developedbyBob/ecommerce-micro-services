import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
    const payload = {
        user: {
            id: user.id,
        }
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export default generateToken;
