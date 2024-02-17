const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const { DRINKS_CATEGORY, GLASSES } = require('../constants');

// mongoose schema
const drinkSchema = new Schema(
  {
    drink: {
      type: String,
      required: true,
      unique: true,
    },
    drinkAlternate: {
      type: String,
      default: 'Sorry, not specified',
    },
    tags: {
      type: String,
      default: 'Sorry, not specified',
    },
    video: {
      type: String,
      default: 'Sorry, not specified',
    },
    category: {
      type: String,
      enum: DRINKS_CATEGORY,
      required: true,
    },
    IBA: {
      type: String,
      default: 'Sorry, not specified',
    },
    alcoholic: {
      type: String,
      enum: ['Alcoholic', 'Non alcoholic'],
      required: true,
    },
    glass: {
      type: String,
      enum: GLASSES,
      required: true,
    },
    description: {
      type: String,
      default: 'Sorry, not specified',
    },
    instructions: {
      type: String,
      required: true,
    },
    drinkThumb: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          measure: {
            type: String,
            required: true,
          },
          _id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'ingredient',
          },
        },
      ],
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    favorites: {
      type: [
        {
          _id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'user',
          },
        },
      ],
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

// mongoose error handler
drinkSchema.post('save', handleMongooseError);

// Joi schemas
const drinksAddSchema = Joi.object({
  drink: Joi.string().required().messages({
    'string.base': `drink should be a type of 'string'`,
    'any.required': `missing required drink field`,
  }),
  category: Joi.string()
    .valid(...DRINKS_CATEGORY)
    .required()
    .messages({
      'string.base': `category should be a type of 'string'`,
      'any.required': `missing required category field`,
    }),
  alcoholic: Joi.string()
    .valid('Alcoholic', 'Non alcoholic')
    .required()
    .messages({
      'string.base': `alcoholic should be a type of 'string'`,
      'any.required': `missing required alcoholic field`,
    }),
  glass: Joi.string()
    .valid(...GLASSES)
    .required()
    .messages({
      'string.base': `glass should be a type of 'string'`,
      'any.required': `missing required glass field`,
    }),
  instructions: Joi.string().required().messages({
    'string.base': `instructions should be a type of 'string'`,
    'any.required': `missing required instructions field`,
  }),
  drinkThumb: Joi.string().required().messages({
    'string.base': `drinkThumb should be a type of 'string'`,
    'any.required': `missing required drinkThumb field`,
  }),
  ingredients: Joi.string().required().messages({
    'string.base': `ingredients should be a type of 'string'`,
    'any.required': `missing required ingredients field`,
  }),
  shortDescription: Joi.string().required().messages({
    'string.base': `drink should be a type of 'string'`,
    'any.required': `missing required drink field`,
  }),
});

const drinkAddFavoriteSchema = Joi.object({
  _id: Joi.string().required().messages({
    'string.base': `_id should be a type of 'string'`,
    'any.required': `missing required _id field`,
  }),
});

// group all Joi schemas
const schemas = { drinksAddSchema, drinkAddFavoriteSchema };

// create model for drink
const Drink = model('drink', drinkSchema);

module.exports = { Drink, schemas };
