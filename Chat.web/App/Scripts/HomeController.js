//app.controller('homeController', function ($scope, $http, $q, LoginService, $window, $location) {
//    $scope.loggedIn = false;
//    $scope.token = 'Please Log In'
//    $scope.login = function () {
//        LoginService.processLogin($scope.user.username, $scope.user.password).then(function () {
//            $scope.token = "Logged In Successfully"; document.getElementById("text").value = "";
//            document.getElementById("password").value = "";
//            $location.path('/userView');
//        }, function (status) {
//            $scope.token = status;
//        });
//    };
//})