
dashboard.controller("FormBasicController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    $('.panel-action-dismiss').click(function(){
        $(this).parent().parent().parent('.panel').parent().remove();
    });
}]);
