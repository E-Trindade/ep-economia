var app = angular.module('app', [])

app
    .controller('ofdem_ctrl', function($scope) {})
    .controller('dem_btn_ctrl', function($scope) {})
    .controller('el_dem_ctrl', function($scope) {
        $scope.qi = 0
        $scope.qf = 1
        $scope.pi = 0
        $scope.pf = 1
    })
    .controller('el_ren_ctrl', function($scope) {
        $scope.qi = 0
        $scope.qf = 1
        $scope.li = 0
        $scope.lf = 1
    })
    .controller('el_cruz_ctrl', function($scope) {
        $scope.qi = 0
        $scope.qf = 1
        $scope.pi = 0
        $scope.pf = 1
    })
