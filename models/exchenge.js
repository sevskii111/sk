const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExchangeSchema = new Schema({
  avalible: {
    equipment: Number,
    energy: Number,
    tech: Number,
    transport: Number,
    education: Number,
    weapon: Number,
    housing: Number,
    supply: Number,
    domestic: Number
  },
  startAvalible: {
    equipment: Number,
    energy: Number,
    tech: Number,
    transport: Number,
    education: Number,
    weapon: Number,
    housing: Number,
    supply: Number,
    domestic: Number
  },
  startPrices: {
    equipment: Number,
    energy: Number,
    tech: Number,
    transport: Number,
    education: Number,
    weapon: Number,
    housing: Number,
    supply: Number,
    domestic: Number
  }
});

mongoose.model("exchenge", ExchangeSchema);
