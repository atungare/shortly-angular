angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {
    url: $scope.urlToShorten
  };
  $scope.loading = false;

  $scope.addLink = function(){
    $scope.loading = true;
    Links.addLink($scope.link).then(function(message){
      console.log(message);
      $scope.loading = false;
    });
  };
});
