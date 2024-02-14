const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { EMAIL_REGEX } = require('../constants');

// mongoose schema
const subscriptionSchema = new Schema(
  {},
  { versionKey: false, timestamps: true }
);

// mongoose error handler
subscriptionSchema.post('save', handleMongooseError);

// Joi schemas

// group all Joi schemas
const schemas = {};

// create model for subscription
const Subscription = model('subscription', subscriptionSchema);

module.export = { Subscription, schemas };
