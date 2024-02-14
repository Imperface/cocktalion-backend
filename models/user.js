const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { EMAIL_REGEX } = require('../constants');

// mongoose schema
const userSchema = new Schema({}, { versionKey: false, timestamps: true });

// mongoose error handler
userSchema.post('save', handleMongooseError);

// Joi schemas

// group all Joi schemas
const schemas = {};

// create model for user
const User = model('user', userSchema);

module.export = { User, schemas };
