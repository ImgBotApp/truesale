
dashboard.controller("HomeFourController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    //vm.showDetails = true;
    vm.home = {};

    vm.home.mainDataLeft = [
        {title: "User Performance", value: "17,50"}
    ];
    vm.home.mainData = [
        {
            title: "New orders",
            value: "580",
            icon: "plus"
        },
        {
            title: "Total sale today",
            value: "$970",
            icon: "shopping-cart"
        },
        {
            title: "Pending Orders",
            value: "256",
            icon: "tasks"
        },
        {
            title: "Total Income",
            value: "$9.7k",
            icon: "usd"
        },
    ];

    vm.home.orderData = [
        {
            id: '0001',
            purchage_date: '03/11/2015',
            client_name: 'Addison Nichols',
            amount: '515.20',
            quantity: '547',
            shipment: '04/10/2015',
            status: 'Standby'
        },
        {
            id: '0002',
            purchage_date: '05/11/2015',
            client_name: 'Albert Watkins',
            amount: '22.30',
            quantity: '122',
            shipment: '06/10/2015',
            status: 'Paid'
        },
        {
            id: '0003',
            purchage_date: '07/09/2015',
            client_name: 'Johnny Fernandez',
            amount: '31.4',
            quantity: '68',
            shipment: '28/09/2015',
            status: 'Standby'
        },
        {
            id: '0011',
            purchage_date: '19/09/2015',
            client_name: 'Gilbert Edwards',
            amount: '5115.12',
            quantity: '51',
            shipment: '-',
            status: 'Canceled'
        },
        {
            id: '0012',
            purchage_date: '20/09/2015',
            client_name: 'Norman Hill',
            amount: '5124.13',
            quantity: '41',
            shipment: '-',
            status: 'Shipped'
        },
        {
            id: '0013',
            purchage_date: '22/09/2015',
            client_name: 'Samantha Murphy',
            amount: '513.214',
            quantity: '54',
            shipment: '-',
            status: 'Canceled'
        },
        {
            id: '0014',
            purchage_date: '30/09/2015',
            client_name: 'Nora Lambert',
            amount: '147.15',
            quantity: '65',
            shipment: '23/11/2015',
            status: 'Paid'
        },
        {
            id: '0015',
            purchage_date: '29/07/2015',
            client_name: 'Shelly Robertson',
            amount: '15.016',
            quantity: '12',
            shipment: '-',
            status: 'Canceled'
        },
        {
            id: '0016',
            purchage_date: '22/07/2015',
            client_name: 'Everett Garcia',
            amount: '188.19',
            quantity: '65',
            shipment: '029/11/2015',
            status: 'Paid'
        }
    ];



    $scope.whatClassIsIt = function (someValue) {
        if (someValue == "Paid")
            return "label-success"
        else if (someValue == "Shipped")
            return "label-purple";
        else if (someValue == "Rejected")
            return "label-danger";
        else if (someValue == "Canceled")
            return "label-inverse";
        else if (someValue == "Standby")
            return "label-info";
    }

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

}]);
