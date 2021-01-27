const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You need a name!"],
    minlength: [3, "Must be 3 or more characters!"]
  },
  type: {
    type: String,
    required: [true, "You need a type!"],
    minlength: [3, "Must be 3 or more characters!"]
  },
  desc: {
    type: String,
    required: [true, "You need a description!"],
    minlength: [3, "Must be 3 or more characters!"]
  },
  skill1: {
    type: String,
    required: [false],
  },
  skill2: {
    type: String,
    required: [false],
  },
  skill3: {
    type: String,
    required: [false],
  },
}, { timestamps: true });

module.exports.Pet = mongoose.model("Pet", PetSchema);