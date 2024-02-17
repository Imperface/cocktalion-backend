const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { EMAIL_REGEX } = require('../constants');

// mongoose schema
const ingredientSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    ingredientThumb: {
      type: String,
      required: true,
    },
    'thumb-medium': {
      type: String,
      required: true,
    },
    'thumb-small': {
      type: String,
      required: true,
    },
    abv: {
      type: String,
      required: true,
    },
    alcohol: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    flavour: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

// mongoose error handler
ingredientSchema.post('save', handleMongooseError);

// Joi schemas

// group all Joi schemas
const schemas = {};

// create model for ingredient
const Ingredient = model('ingredient', ingredientSchema);

module.exports = { Ingredient, schemas };
