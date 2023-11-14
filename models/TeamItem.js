const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const TeamItem = mongoose.Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('TeamItem', TeamItem)