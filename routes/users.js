const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const verifyToken = require('../middleware/verifyToken')

router.get('/', verifyToken, async (req, res) => {
    try {
        const userData = await User.find();
        res.send(userData)
    } catch (error) {
        res.send({
            message: error
        })
    }
})

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const userData = await User.findById(req.params.id);
        res.send(userData)
    } catch (error) {
        res.send({
            message: error
        })
    }
})

router.post('/', verifyToken, async (req, res) => {
    try {
        var hashPassword = bcrypt.hashSync(req.body.password, 8)

        const userData = await User.create({
            nama: req.body.nama,
            email: req.body.email,
            password: hashPassword,
            role: req.body.role
        })
        res.send(userData)
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', verifyToken, async (req, res) => {
    try {
        var data = {}
        req.body.nama ? data.nama = req.body.nama : ''
        req.body.email ? data.email = req.body.email : ''
        req.body.password ? data.password = bcrypt.hashSync(req.body.password, 8) : ''
        req.body.role ? data.role = req.body.role : ''

        const userData = await User.updateOne({
            _id: req.params.id
        }, data)
        res.send(userData)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.deleteOne({ _id: req.params.id });
        res.send(user);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router