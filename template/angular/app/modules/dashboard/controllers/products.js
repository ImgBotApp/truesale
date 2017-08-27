
dashboard.controller("ProductsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.orderData = [
        {
            id: '0001',
            name: 'Product 1',
            description: 'Description for Product',
            price: '12.20',
            quantity: '233',
            status: 'Stock',
            added: '04/10/2015'
        },
        {
            id: '0002',
            name: 'Product 2',
            description: 'Description for Product',
            price: '13.20',
            quantity: '245',
            status: 'Stock',
            added: '04/10/2015'
        },
        {
            id: '0003',
            name: 'Product 3',
            description: 'Description for Product',
            price: '14.20',
            quantity: '210',
            status: 'Removed',
            added: '04/10/2015'
        },
        {
            id: '0004',
            name: 'Product 4',
            description: 'Description for Product',
            price: '17.20',
            quantity: '310',
            status: 'Out of Stock',
            added: '04/10/2015'
        },
        {
            id: '0005',
            name: 'Product 5',
            description: 'Description for Product',
            price: '11.20',
            quantity: '110',
            status: 'Removed',
            added: '04/10/2015'
        },
        {
            id: '0006',
            name: 'Product 6',
            description: 'Description for Product',
            price: '14.80',
            quantity: '220',
            status: 'Stock',
            added: '04/10/2015'
        },
        {
            id: '0007',
            name: 'Product 7',
            description: 'Description for Product',
            price: '17.50',
            quantity: '200',
            status: 'Removed',
            added: '04/10/2015'
        },
        {
            id: '0008',
            name: 'Product 8',
            description: 'Description for Product',
            price: '14.50',
            quantity: '109',
            status: 'Out of Stock',
            added: '04/10/2015'
        },
        {
            id: '0009',
            name: 'Product 9',
            description: 'Description for Product',
            price: '16.50',
            quantity: '185',
            status: 'Removed',
            added: '04/10/2015'
        },
    ];



    $scope.whatClassIsIt = function (someValue) {
        if (someValue == "Stock")
            return "label-success"
        else if (someValue == "Removed")
            return "label-danger";
        else if (someValue == "Out of Stock")
            return "label-warning";
    }

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

}]);
