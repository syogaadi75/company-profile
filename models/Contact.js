const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const Contact = mongoose.Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    links: {
        type: Object,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Contact', Contact)