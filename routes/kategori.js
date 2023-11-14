const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const Kategori = require('../models/Kategori')

router.get('/', verifyToken, async (req, res) => {
    try {
        const menuData = await Kategori.findOne({ id_user: req.userId })
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
        const data = await Kategori.findOne({ id_user: id });

        const payload = {
            id_user: id,
            blue_section_title: req.body.blue_section_title,
            section_title: req.body.section_title,
        }

        let response = {};
        if (data) {
            response = await Kategori.updateOne({
                id_user: id
            }, payload)
        } else {
            response = await Kategori.create(payload);
        }
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router