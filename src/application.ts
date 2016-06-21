const angular = require("angular");

namespace learnAngular {
  const app = angular.module("myApp", []);
  app.controller("myCtrl", function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Dong";
  });
}
