const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const TentangKami = require('../models/TentangKami')

router.get('/', verifyToken, async (req, res) => {
    try {
        const menuData = await TentangKami.findOne({ id_user: req.userId })
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
        const data = await TentangKami.findOne({ id_user: id });

        const payload = {
            id_user: id,
            section_name: req.body.section_name,
            section_title: req.body.section_title,
            section_banner: req.body.section_banner,
            section_description: req.body.section_description,
        }

        let response = {};
        if (data) {
            response = await TentangKami.updateOne({
                id_user: id
            }, payload)
        } else {
            response = await TentangKami.create(payload);
        }
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router