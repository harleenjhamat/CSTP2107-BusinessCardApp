import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var validator = require('validator')

var usercard = new Schema({
    json: {
        type: JSON,
        required: true
    },
    user: {
        type: JSON,
        required: true
    },
    img: {
        type: String
    },
    sharedcode: {
        type: String
    }
});

mongoose.models = {};
var Usercard = mongoose.model('Usercard', usercard);

export default Usercard;