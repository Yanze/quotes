var mongoose = require("mongoose");
var Quote = mongoose.model('Quote');

module.exports = (function(){
  return {

    add: function(req, res){

      var quote = new Quote({
        username: req.body.username,
        quote: req.body.content,
        createdAt: Date(),
        likes: 0
      });
      quote.save(function(err){
        if(err){
          res.json({
            status: "KO",
            message: "sth went wrong"
          });
        }
        else{
          res.json({
            status: "OK",
            message: "added"
          });
        }
      });
    },

    getAll: function(req, res){
      Quote.find({}, function(err, quotes){
        if(err){
          res.json({
            status: "KO",
            message: "sth went wrong"
          });
        }
        else {
          res.json(quotes);
        }
      });
    },

    addLike: function(req, res){
      Quote.findOne({_id: req.params.id}, function(err, quote){
        if(err){
          res.json({
            status: "KO",
            message: "sth went wrong"
          });
        }
        else {
          quote.likes += 1;
          quote.save();
          res.json({
            status: "OK",
            message: "Like added."
          });
        }
      });
    },


  };
})();
