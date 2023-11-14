const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const Contact = require('../models/Contact')

router.get('/', verifyToken, async (req, res) => {
    try {
        const menuData = await Contact.findOne({ id_user: req.userId })
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
        const data = await Contact.findOne({ id_user: id });

        const payload = {
            id_user: id,
            description: req.body.description,
            links: req.body.links,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
        }

        let response = {};
        if (data) {
            response = await Contact.updateOne({
                id_user: id
            }, payload)
        } else {
            response = await Contact.create(payload);
        }
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router