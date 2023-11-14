const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const Kategori = mongoose.Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    blue_section_title: {
        type: String,
        required: false,
    },
    section_title: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Kategori', Kategori)