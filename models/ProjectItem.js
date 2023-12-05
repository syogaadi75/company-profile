const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const ProjectItem = mongoose.Schema({
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
    simple_description: {
        type: String,
        required: true,
    },
    full_description: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('ProjectItem', ProjectItem)