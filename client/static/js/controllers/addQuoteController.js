var app = angular.module("app");


app.controller("addQuoteController", function($scope, $location, addQuoteFactory){

  $scope.add = function(){
    $scope.submitted = true;
    var newQuote = $scope.quote;
    if(!newQuote ||
      newQuote.username.length < 3 ||
      newQuote.content.length < 10){
      return;
    }

    addQuoteFactory.add(newQuote, function(response){

      if(response.status == "OK") {
        $scope.success = "Successful added!";
        $location.path("/main");
      }
      else{
        $scope.warning = "Sth went wrong!";
      }
    });


  };
});
