const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const LayananItem = mongoose.Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('LayananItem', LayananItem)