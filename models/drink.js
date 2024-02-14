const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { EMAIL_REGEX } = require("../constants");

// mongoose schema
const drinkSchema = new Schema({}, { versionKey: false, timestamps: true });

// mongoose error handler
drinkSchema.post("save", handleMongooseError);

// Joi schemas

// group all Joi schemas
const schemas = {};

// create model for drink
const Drink = model("drink", drinkSchema);

module.export = { Drink, schemas };
