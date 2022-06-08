const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  Package: {
    type: String,
    required: true,
  },
  price: { type: String, required: true },
  date: { type: Date },
});
module.exports = mongoose.model("book", Schema);
