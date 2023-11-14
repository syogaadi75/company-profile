const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const verifyToken = require('../middleware/verifyToken')

router.get('/me', verifyToken, async (req, res) => {
    try {
        const userData = await User.findById(req.userId, {
            password: false
        })
        res.send(userData)
    } catch (error) {
        res.send({
            message: error
        })
    }
})

router.post('/register', async (req, res) => {
    try {
        var hashPassword = bcrypt.hashSync(req.body.password, 8)

        const userData = await User.create({
            nama: req.body.nama,
            email: req.body.email,
            password: hashPassword,
            role: req.body.role
        })
        var token = await jwt.sign({
            id: userData._id
        }, process.env.SECRET, {
            expiresIn: 86400
        })
        res.send({
            auth: true,
            token: token
        })
    } catch (error) {
        res.send(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            email: req.body.email
        })
        if (!userData) return res.status(401).send({
            message: 'Email tidak ditemukan'
        })

        const verifyPassword = await bcrypt.compareSync(req.body.password, userData.password)
        if (!verifyPassword) return res.status(401).send({
            message: 'Password salah '
        })
        var exp = 7 * 24 * 60 * 60;
        const token = await jwt.sign({
            id: userData._id
        }, process.env.SECRET, {
            expiresIn: exp
        })
        res.status(res.statusCode).send({
            auth: true,
            token: token,
            user: userData
        })
    } catch (error) {
        res.status(401).send({
            message: error
        })
    }
})

router.get('/logout', async (req, res) => {
    try {
        res.send({
            auth: false,
            token: null
        })
    } catch (error) {
        res.send({
            message: error
        })
    }
})

module.exports = router