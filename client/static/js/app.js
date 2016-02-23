var app = angular.module('app', ['ngRoute', 'ngMessages', 'angularMoment']);

app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "/static/partials/addQuote.html"
  })
  .when("/main",{
    templateUrl: "/static/partials/main.html"
  });

});
