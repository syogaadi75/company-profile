const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const CategoryItem = require('../models/CategoryItem')

router.get('/', verifyToken, async (req, res) => {
    try {
        const id = req.userId;
        const data = await CategoryItem.find({ id_user: id });
        res.send(data);
    } catch (error) {
        res.send({
            message: error
        })
    }
})

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await CategoryItem.findOne({ _id: id });
        res.send(data);
    } catch (error) {
        res.send({
            message: error
        })
    }
})

router.post('/', verifyToken, async (req, res) => {
    try {
        const id = req.userId;
        const data = await CategoryItem.create({
            id_user: id,
            icon: req.body.icon,
            title: req.body.title,
            description: req.body.description
        });
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', verifyToken, async (req, res) => {
    try {
        var data = {
            icon: req.body.icon,
            title: req.body.title,
            description: req.body.description
        }

        const resData = await CategoryItem.updateOne({
            _id: req.params.id
        }, data)
        res.send(resData)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const data = await CategoryItem.deleteOne({ _id: req.params.id });
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router