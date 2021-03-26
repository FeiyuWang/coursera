(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.result = "";

  $scope.count = function() {
    var count = $scope.items.split(",").length;
    if ($scope.items == "")
      $scope.result = "Please enter data first";
    else if (count <= 3)
      $scope.result = "Enjoy!";
    else $scope.result = "Too much!";
  };
};

})();
