const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const tentangKami = mongoose.Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    section_name: {
        type: String,
        required: false,
    },
    section_title: {
        type: String,
        required: true,
    },
    section_banner: {
        type: String,
        required: true,
    },
    section_description: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('TentangKami', tentangKami)