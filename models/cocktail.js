const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { EMAIL_REGEX } = require("../constants");

// mongoose schema
const cocktailSchema = new Schema({}, { versionKey: false, timestamps: true });

// mongoose error handler
cocktailSchema.post("save", handleMongooseError);

// Joi schemas

// group all Joi schemas
const schemas = {};

// create model for user
const Cocktail = model("cocktail", cocktailSchema);

module.export = { Cocktail, schemas };
