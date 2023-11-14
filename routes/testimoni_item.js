const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const TestimoniItem = require('../models/TestimoniItem')

router.get('/', verifyToken, async (req, res) => {
    try {
        const id = req.userId;
        const data = await TestimoniItem.find({ id_user: id });
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
        const data = await TestimoniItem.findOne({ _id: id });
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
        const data = await TestimoniItem.create({
            id_user: id,
            photo: req.body.photo,
            name: req.body.name,
            rating: req.body.rating,
            position: req.body.position,
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
            photo: req.body.photo,
            name: req.body.name,
            rating: req.body.rating,
            position: req.body.position,
            description: req.body.description
        }

        const resData = await TestimoniItem.updateOne({
            _id: req.params.id
        }, data)
        res.send(resData)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const data = await TestimoniItem.deleteOne({ _id: req.params.id });
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router