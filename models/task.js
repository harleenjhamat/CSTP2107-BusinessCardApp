import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var validator = require('validator')

var task = new Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

mongoose.models = {};
var Task = mongoose.model('Task', task);

export default Task;