const mongoose = require("mongoose");
const { Schema } = mongoose;

const weightSchema = new Schema({
  weight: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Weight", weightSchema);
