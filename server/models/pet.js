const uniqueValidator = require('mongoose-unique-validator')
const validator = require('validator')
const mongoose = require("mongoose");
const { Schema } = mongoose;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    description: {
      type: String,

      minlength: 3,
    },
    likes: {
      type: Number,
      required: true
    },
    skills: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

petSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.'})

module.exports = mongoose.model("Pet", petSchema);
