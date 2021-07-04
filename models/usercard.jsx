import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var validator = require('validator')

var usercard = new Schema({
    json: {
        type: JSON,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    sharedcode: {
        type: String
    },
    other_cards: {
        type: Array
    }
});

mongoose.models = {};
var Usercard = mongoose.model('Usercard', usercard);

export default Usercard;