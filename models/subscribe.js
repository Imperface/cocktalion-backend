const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { EMAIL_REGEX } = require('../constants');

// mongoose schema
const subscribeSchema = new Schema({}, { versionKey: false, timestamps: true });

// mongoose error handler
subscribeSchema.post('save', handleMongooseError);

// Joi schemas

// group all Joi schemas
const schemas = {};

// create model for subscribe
const Subscribe = model('subscribe', subscribeSchema);

module.export = { Subscribe, schemas };
