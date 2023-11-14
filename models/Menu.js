const mongoose = require('mongoose');
const {
    Schema
} = require('mongoose')

const MenuSchema = mongoose.Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    menus: {
        type: Array,
        required: true,
    },
})

module.exports = mongoose.model('Menus', MenuSchema)