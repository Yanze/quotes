var app = angular.module("app");

app.factory('addQuoteFactory', function($http) {
  var factory = {};

  factory.add = function(quote, callback){
    $http.post("/add", quote).success(function(response){
      callback(response);
    });
  };

  factory.get = function(callback){
    $http.get("/get-all").success(function(response){
      callback(response);
    });
  };

  factory.addLike = function(quoteId, callback){
    $http.post("/add-like/"+quoteId).success(function(response){
      callback(response);
    });
  };

  return factory;
});
