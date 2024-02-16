const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { EMAIL_REGEX, DATE_REGEX } = require('../constants');

// mongoose schema

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    dateOfBirth: { type: String, match: DATE_REGEX, required: true },
    email: { type: String, match: EMAIL_REGEX, required: true, unique: true },
    password: { type: String, minlength: 6, required: true },
    avatarURL: { type: String, require: true },
    token: { type: String, default: '' },
  },
  { versionKey: false, timestamps: true }
);

// mongoose error handler
userSchema.post('save', handleMongooseError);

// Joi schemas

const signupSchema = Joi.object({
  name: Joi.string().required(),
  dateOfBirth: Joi.string().pattern(DATE_REGEX).required(),
  email: Joi.string().pattern(EMAIL_REGEX).required().messages({
    'string.base': `email should be a type of 'string'`,
    'string.empty': `email cannot be an empty field`,
    'any.required': `missing required email field`,
    'string.pattern.base': 'wrong email format',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': `password should be a type of 'string'`,
    'string.empty': `password cannot be an empty field`,
    'any.required': `missing required password field`,
  }),
});

const signinSchema = Joi.object({
  email: Joi.string().pattern(EMAIL_REGEX).required().messages({
    'string.base': `email should be a type of 'string'`,
    'string.empty': `email cannot be an empty field`,
    'any.required': `missing required email field`,
    'string.pattern.base': 'wrong email format',
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': `password should be a type of 'string'`,
    'string.empty': `password cannot be an empty field`,
    'any.required': `missing required password field`,
  }),
});

const schemas = { signupSchema, signinSchema };

// create model for user
const User = model('user', userSchema);

module.exports = { User, schemas };
