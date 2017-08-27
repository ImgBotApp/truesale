
dashboard.controller("TableBasicController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.tableData = [
        {
            id:'1',
            fname: 'Karen',
            lname: 'Martin',
            username: '@karen'
        },
        {
            id:'2',
            fname: 'Jame',
            lname: 'Smith',
            username: '@jame'
        },
        {
            id:'3',
            fname: 'Sarah',
            lname: 'Garcia',
            username: '@sarah'
        },

    ];


    $('.panel-action-dismiss').click(function(){
        $(this).parent().parent().parent('.panel').parent().remove();
    });
}]);
