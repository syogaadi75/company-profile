const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoute = require('./routes/auth.js');
const menuRoute = require('./routes/menu.js');
const homeRoute = require('./routes/home.js');
const usersRoute = require('./routes/users.js');
const tentangKamiRoute = require('./routes/tentang_kami.js');
const kategoriRoute = require('./routes/kategori.js');
const kategoriItemRoute = require('./routes/category_item.js');
const teamRoute = require('./routes/team.js');
const teamItemRoute = require('./routes/team_item.js');
const layananRoute = require('./routes/layanan.js');
const layananItemRoute = require('./routes/layanan_item.js');
const testimoniRoute = require('./routes/testimoni.js');
const testimoniItemRoute = require('./routes/testimoni_item.js');
const contactRoute = require('./routes/contact.js');
const bcrypt = require('bcryptjs')
require('dotenv/config');

const app = new express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoute)
app.use('/users', usersRoute)
app.use('/menu', menuRoute)
app.use('/home', homeRoute)
app.use('/tentang-kami', tentangKamiRoute)
app.use('/kategori', kategoriRoute)
app.use('/kategori-item', kategoriItemRoute)
app.use('/team', teamRoute)
app.use('/team-item', teamItemRoute)
app.use('/layanan', layananRoute)
app.use('/layanan-item', layananItemRoute)
app.use('/testimoni', testimoniRoute)
app.use('/testimoni-item', testimoniItemRoute)
app.use('/contact', contactRoute)
app.use('/', (req, res) => {
    res.send('Selamat Datang');
});

// Koneksi DB 
mongoose.connect(process.env.DB_CONNECTION);

// Start Server
app.listen(process.env.PORT || 3000, function () {
    console.log('Express server listening on port http://localhost:' + this.address().port)
});