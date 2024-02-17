const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { EMAIL_REGEX } = require('../constants');

// mongoose schema
const drinkSchema = new Schema(
  {
    drink: {
      type: String,
      required: [true, 'Set cocktail`s name'],
    },
    drinkAlternate: { type: String, default: null },
    tags: { type: String, default: null },
    video: { type: String, default: null },
    category: {
      type: String,
      required: [true, 'Set cocktail`s category'],
      default: 'Other/Unknown',
    },
    IBA: { type: String, default: null },
    alcoholic: {
      type: String,
    },
    glass: {
      type: String,
      required: [true, 'Set type of glass'],
    },
    instructions: {
      type: String,
      required: [true, 'Set instruction'],
    },
    instructionsUK: { type: String, default: null },
    instructionsES: { type: String, default: null },
    instructionsDE: { type: String, default: null },
    instructionsFR: { type: String, default: null },
    instructionsIT: { type: String, default: null },
    instructionsPL: { type: String, default: null },
    instructionsRU: { type: String, default: null },
    drinkThumb: { type: String, default: null },
    ingredients: [
      {
        title: {
          type: String,
          required: [true, 'Set ingredient`s name'],
        },
        measure: {
          type: String,
          default: null,
        },
        ingredientThumb: { type: String, default: null },
        'thumb-medium': { type: String, default: null },
        'thumb-small': { type: String, default: null },
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    // private: { type: Boolean, default: false },
    favorite: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    about: { type: String, default: null },
  },
  { versionKey: false, timestamps: true }
);

// mongoose error handler
drinkSchema.post('save', handleMongooseError);

// Joi schemas

// group all Joi schemas
const schemas = {};

// create model for drink
const Drink = model('drink', drinkSchema);

module.export = { Drink, schemas };
