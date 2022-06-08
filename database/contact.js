const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "user",
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  problem: { type: String, required: true },
  quary: { type: String, required: true },
});
module.exports = mongoose.model("aaryaaa", Schema);
