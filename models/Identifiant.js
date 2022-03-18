const mongoose = require('mongoose');

const identifiantSchema = mongoose.Schema({
    "categories_id": {
        type: Number,
        required: true
    },
    "name": {
        type: String,
        required: true
    },
    "username": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    },
    "image": {
        type: String,
        required: true
    },
    "date_creation": {
        type: Date,
        required: true
    },
    "date_modification": {
        type: Date,
        required: true
    },
    "id_user": {
        type: String
    }
})

module.exports = mongoose.model('Identifiant', identifiantSchema);