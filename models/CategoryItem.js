const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const CategoryItem = mongoose.Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    icon: {
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

module.exports = mongoose.model('CategoryItem', CategoryItem)