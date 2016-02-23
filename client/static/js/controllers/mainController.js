var app = angular.module("app");


app.controller("mainController", function($scope, $location, addQuoteFactory){
  addQuoteFactory.get(function(data){
    $scope.quotes = data;
  });

  $scope.addLike = function(quote){
    addQuoteFactory.addLike(quote._id, function(response){
      addQuoteFactory.get(function(data){
        $scope.quotes = data;
      });
    });
  };
});
