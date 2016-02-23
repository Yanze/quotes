var quotes = require("./../backendController/quotes.js");

module.exports = function(app){
  app.post("/add", quotes.add);
  app.post("/add-like/:id", quotes.addLike);
  app.get("/get-all", quotes.getAll);
};
