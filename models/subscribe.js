const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { EMAIL_REGEX } = require('../constants');

// mongoose schema
const subscribeSchema = new Schema({
  subscribe: {
    type: Boolean,
    default: true,
  },
  email: {
    type: String,
    match: EMAIL_REGEX,
    required: true,
  },
}, { versionKey: false, timestamps: true });

// mongoose error handler
subscribeSchema.post('save', handleMongooseError);

// Joi schemas
const joiSubscribeSchema = Joi.object({
  email: Joi.string().pattern(EMAIL_REGEX).required().messages({
    'string.base': `email should be a type of 'string'`,
    'string.empty': `email cannot be an empty field`,
    'any.required': `missing required email field`,
    'string.pattern.base': 'wrong email format',
  }),
});

// group all Joi schemas
const schemas = {
  joiSubscribeSchema,
};

// create model for subscribe
const Subscribe = model('subscribe', subscribeSchema);

module.exports = { Subscribe, schemas };
