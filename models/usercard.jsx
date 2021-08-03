/**
 * @ Author: CyberCard 2107 team
 * @ Create Time: 2021-07-24 21:59:57
 * @ Description: 
 *      This file is for keeping mongoose modules
 */

import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var validator = require('validator')

var usercard = new Schema({
    json: {
        type: JSON
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    img: {
        type: String
    },
    sharedcode: {
        type: String
    },
    other_cards: {
        type: Array
    },
    tag: {
        type: String
    }
});

mongoose.models = {};
var Usercard = mongoose.model('Usercard', usercard);

export default Usercard;