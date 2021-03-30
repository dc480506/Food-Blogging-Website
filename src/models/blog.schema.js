const mongoose = require('mongoose')
const User = require('./user.schema').User;

let Blog = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    publishTime: {
        type: Number,
        required: true
    },
    image_url: {
        type: String
        //required: true
    },
    comments: [{
        comment: { type: String },
        commentator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
})

exports.Blog = mongoose.model('Blog', Blog)