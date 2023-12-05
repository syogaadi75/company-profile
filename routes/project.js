const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const Project = require('../models/Project')

router.get('/', verifyToken, async (req, res) => {
    try {
        const menuData = await Project.findOne({ id_user: req.userId })
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
        const data = await Project.findOne({ id_user: id });

        const payload = {
            id_user: id,
            section_name: req.body.section_name,
            section_title: req.body.section_title,
        }

        let response = {};
        if (data) {
            response = await Project.updateOne({
                id_user: id
            }, payload)
        } else {
            response = await Project.create(payload);
        }
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router