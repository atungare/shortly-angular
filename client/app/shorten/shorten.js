angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.loading = false;

  $scope.addLink = function(){
    $scope.loading = true;

    $scope.link.url = $scope.urlToShorten;
    $scope.urlToShorten = null;

    Links.addLink($scope.link)
      .then(function(){
        $scope.loading = false;
        $location.path('/links');
      })
      .catch(function(err) {
        alert(err);
      });
  };
  $scope.signout = Auth.signout;
});
