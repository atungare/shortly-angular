angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $window, Auth) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks().then(function(links) {
      $scope.data.links = links;
    });
  };
  $scope.getLinks();
  $scope.goToShort = function(link){
    $window.location.href = link.base_url + '/' + link.code;
  };

  $scope.signout = Auth.signout;
});
