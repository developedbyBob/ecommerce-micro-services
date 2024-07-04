import User from '../models/User'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/jwtUtils'

export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body

        let user = await User.findOne({email})
        if (user) {
            return res.status(400).json({msg: 'User already exists'})
        }

        user = new User({
            name, email, password,
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        await user.save()

        const token = generateToken(user)
        res.json({token})
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({msg: `Invalid credentials`})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({msg: 'Invalid credentials'})
        }

        const token = generateToken(user)
        res.json({token})
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
}

expo