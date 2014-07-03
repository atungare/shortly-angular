angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {
    url: $scope.urlToShorten
  };
  $scope.addLink = function(){
    Links.addLink($scope.link).then(function(message){
      console.log(message);
    });
  };
});
