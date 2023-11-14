const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const Home = require('../models/Home')

router.get('/', verifyToken, async (req, res) => {
    try {
        const menuData = await Home.findOne({ id_user: req.userId })
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
        const home = await Home.findOne({ id_user: id });

        const payload = {
            id_user: id,
            blue_hero_title: req.body.blue_hero_title,
            hero_title: req.body.hero_title,
            banner: req.body.banner,
            hero_description: req.body.hero_description,
        }

        let response = {};
        if (home) {
            response = await Home.updateOne({
                id_user: id
            }, payload)
        } else {
            response = await Home.create(payload);
        }
        res.send(response);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router