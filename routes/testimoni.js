const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const Testimoni = require('../models/Testimoni')

router.get('/', verifyToken, async (req, res) => {
    try {
        const menuData = await Testimoni.findOne({ id_user: req.userId })
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
        const data = await Testimoni.findOne({ id_user: id });

        const payload = {
            id_user: id,
            section_name: req.body.section_name,
            section_title: req.body.section_title,
            section_image: req.body.section_image,
        }

        let response = {};
        if (data) {
            response = await Testimoni.updateOne({
                id_user: id
            }, payload)
        } else {
            response = await Testimoni.create(payload);
        }
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router