const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const Layanan = require('../models/Layanan')

router.get('/', verifyToken, async (req, res) => {
    try {
        const menuData = await Layanan.findOne({ id_user: req.userId })
        res.send(menuData)
    } catch (error) {
        res.send({
            message: error
        })
    }
})

router.put('/', verifyToken, async (req, res) => {
    try {
        const id = req.userId
        const data = await Layanan.findOne({ id_user: id });

        const payload = {
            id_user: id,
            section_name: req.body.section_name,
            section_title: req.body.section_title,
        }

        let response = {};
        if (data) {
            response = await Layanan.updateOne({
                id_user: id
            }, payload)
        } else {
            response = await Layanan.create(payload);
        }
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router