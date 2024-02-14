const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { EMAIL_REGEX } = require('../constants');

// mongoose schema
const ingredientSchema = new Schema(
  {},
  { versionKey: false, timestamps: true }
);

// mongoose error handler
ingredientSchema.post('save', handleMongooseError);

// Joi schemas

// group all Joi schemas
const schemas = {};

// create model for ingredient
const Ingredient = model('ingredient', cocktailSchema);

module.export = { Ingredient, schemas };
