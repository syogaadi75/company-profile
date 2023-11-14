const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const homeSchema = mongoose.Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    blue_hero_title: {
        type: String,
        required: false,
    },
    hero_title: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    hero_description: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Home', homeSchema)