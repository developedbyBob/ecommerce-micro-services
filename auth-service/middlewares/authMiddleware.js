import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token')
}