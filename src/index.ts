/// <reference path="../typings/index.d.ts" />
const angular = require("angular");
require("./index.jade");

const app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Dong";
});
