const mongoose = require('mongoose')
const User = require('./user.schema').User;
const Joi = require('joi');

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
    publishInfo: {
        isPublish: { 
            type: Boolean,
            default: false
        },
        publishTime: {
            type: Number
            //required: true
        }
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

function validateBlogData(blog) {
    const schema = Joi.object({
        title: Joi.string().min(5).max(50).required(),
        subtitle: Joi.string().min(5).max(300).required(),
        summary: Joi.string().min(5).max(800).required(),
        description: Joi.string().min(5).max(10000).required(),
        publishNow: Joi.boolean().required()
    });
    return schema.validate(blog);
}

exports.Blog = mongoose.model('Blog', Blog);
exports.validateBlogData = validateBlogData;
