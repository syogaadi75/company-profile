const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const Team = mongoose.Schema({
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
    section_image: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Team', Team)