import express from 'express'
import connectDB from './config/database'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

connectDB()

app.use(express.json())

app.listen(port, () => {
    console.log(`Auth Service running on port ${port}`)
})