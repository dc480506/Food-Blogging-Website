const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Joi = require('joi');
const JWTPrivateKey= require('../config/config').JWTPrivateKey;
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Full Name can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        // minlength: [8, 'Password must be atleast 8 characters'],
        // maxlength: [16, 'password must have 8-16 characters']
    },
    // saltSecret: String
});
//custom validation Email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, "Invalid Email");

//preEvent
userSchema.pre('save', async function (next) {
    this.password= await this.generatePasswordHash(this.password);
    next();
    // bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(this.password, salt, (err, hash) => {
    //         this.password = hash;
    //         // this.saltSecret = salt;
    //         next();
    //     });
    // });
});

//Methods
userSchema.methods.verifyPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

userSchema.methods.generatePasswordHash = async function(password){
    const salt= await bcrypt.genSalt(10);
    const hash=  await bcrypt.hash(password, salt);
    return hash;
};
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({
        _id: this._id
    }, JWTPrivateKey );
};

function validateRegistrationData(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).email().required(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(user);
}

function validateData(user) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).email().required(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(user);
}

exports.User = mongoose.model('User', userSchema);
exports.validateRegistrationData = validateRegistrationData;
exports.validateData = validateData;