const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const ProjectItem = require('../models/ProjectItem')

router.get('/', verifyToken, async (req, res) => {
    try {
        const id = req.userId;
        const data = await ProjectItem.find({ id_user: id });
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
        const data = await ProjectItem.findOne({ _id: id });
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
        const data = await ProjectItem.create({
            id_user: id,
            photo: req.body.photo,
            title: req.body.title,
            simple_description: req.body.simple_description,
            full_description: req.body.full_description
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
            title: req.body.title,
            simple_description: req.body.simple_description,
            full_description: req.body.full_description
        }

        const resData = await ProjectItem.updateOne({
            _id: req.params.id
        }, data)
        res.send(resData)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const data = await ProjectItem.deleteOne({ _id: req.params.id });
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router