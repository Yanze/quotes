var mongoose = require("mongoose"), Schema = mongoose.Schema;

var QuoteSchema = new mongoose.Schema({
  username: String,
  quote: String,
  createdAt: {type: Date, default: new Date()},
  likes: Number
});

mongoose.model('Quote', QuoteSchema);
