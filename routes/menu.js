const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const verifyToken = require('../middleware/verifyToken')
const Menu = require('../models/Menu')
const Home = require('../models/Home')
const TentangKami = require('../models/TentangKami')
const Kategori = require('../models/Kategori')
const Team = require('../models/Team')
const Layanan = require('../models/Layanan')
const Testimoni = require('../models/Testimoni')
const Contact = require('../models/Contact')
const CategoryItem = require('../models/CategoryItem')
const LayananItem = require('../models/LayananItem')
const TestimoniItem = require('../models/TestimoniItem')
const TeamItem = require('../models/TeamItem')
const Project = require('../models/Project')
const ProjectItem = require('../models/ProjectItem')

router.get('/', verifyToken, async (req, res) => {
    try {
        const menuData = await Menu.findOne({ id_user: req.userId })
        res.send(menuData)
    } catch (error) {
        res.send({
            message: error
        })
    }
})

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const menuData = await Menu.findOne({ id_user: req.params.id })
        res.send(menuData)
    } catch (error) {
        res.send({
            message: error
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const data = await Menu.create({
            id_user: req.body.id_user,
            menus: req.body.menus,
        })
        res.send({
            data: data
        })
    } catch (error) {
        res.send(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const data = await User.create({
            id_user: req.body.id_user,
            menus: req.body.menus,
        })
        res.send({
            data: data
        })
    } catch (error) {
        res.send(error)
    }
})

router.get('/get-content/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const home = await Home.findOne({ id_user: id });
        const tentang_kami = await TentangKami.findOne({ id_user: id });
        const kategori = await Kategori.findOne({ id_user: id });
        const project = await Project.findOne({ id_user: id });
        const team = await Team.findOne({ id_user: id });
        const layanan = await Layanan.findOne({ id_user: id });
        const testimoni = await Testimoni.findOne({ id_user: id });
        const contact = await Contact.findOne({ id_user: id });
        // items
        const kategori_items = await CategoryItem.find({ id_user: id });
        const project_items = await ProjectItem.find({ id_user: id });
        const team_items = await TeamItem.find({ id_user: id });
        const layanan_items = await LayananItem.find({ id_user: id });
        const testimoni_items = await TestimoniItem.find({ id_user: id });

        const data = {
            home,
            tentang_kami,
            kategori,
            project,
            team,
            layanan,
            testimoni,
            contact,
            kategori_items,
            team_items,
            layanan_items,
            testimoni_items,
            project_items
        }

        res.send(data);
    } catch (error) {
        res.send(error);
    }

})

module.exports = router