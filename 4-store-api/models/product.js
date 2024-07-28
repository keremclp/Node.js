const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product is necessary "],
  },
  price: {
    type: Number,
    required: [true, "price is necessary"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "select valid company, {VALUE} is incorrect",
    },
    // enum:['ikea', 'liddy', 'caressa', 'marcos'],
  },
});

module.exports = mongoose.model('Product', productSchema)