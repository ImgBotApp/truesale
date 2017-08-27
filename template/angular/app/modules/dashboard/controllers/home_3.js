
dashboard.controller("HomeThreeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
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
                return "inverse";
            else if (someValue == "Standby")
                return "info";
        }



        $("#demo-sparkline-area").sparkline([57, 69, 70, 62, 73, 79, 76, 77, 73, 52, 57, 50, 60, 55, 70, 68], {
        type: 'line',
        width: '100%',
        height: '40',
        spotRadius: 5,
        lineWidth: 1.5,
        lineColor: 'rgba(255,255,255,.85)',
        fillColor: 'rgba(0,0,0,0.03)',
        spotColor: 'rgba(255,255,255,.5)',
        minSpotColor: 'rgba(255,255,255,.5)',
        maxSpotColor: 'rgba(255,255,255,.5)',
        highlightLineColor: '#ffffff',
        highlightSpotColor: '#ffffff',
        tooltipChartTitle: 'Usage',
        tooltipSuffix: ' %'

    });


    var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
    var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

    var data1 = [
        { label: "Data 1", data: d1, color: '#17a084'},
        { label: "Data 2", data: d2, color: '#127e68' }
    ];

    $.plot($("#flot-chart1"), data1, {
        xaxis: {
            tickDecimals: 0
        },
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                }
            },
            points: {
                width: 0.1,
                show: false
            }
        },
        grid: {
            show: false,
            borderWidth: 0
        },
        legend: {
            show: false
        }
    });




    (function () {
        $('#cw-body').fullCalendar({
            contentHeight: 'auto',
            theme: true,
            header: {
                right: 'next',
                center: 'title, ',
                left: 'prev'
            },
            defaultDate: '2014-06-12',
            editable: true,
            events: [
                {
                    title: 'All Day',
                    start: '2014-06-01',
                    className: 'bgm-cyan'
                },
                {
                    title: 'Long Event',
                    start: '2014-06-07',
                    end: '2014-06-10',
                    className: 'bgm-orange'
                },
                {
                    id: 999,
                    title: 'Repeat',
                    start: '2014-06-09',
                    className: 'bgm-lightgreen'
                },
                {
                    id: 999,
                    title: 'Repeat',
                    start: '2014-06-16',
                    className: 'bgm-lightblue'
                },
                {
                    title: 'Meet',
                    start: '2014-06-12',
                    end: '2014-06-12',
                    className: 'bgm-green'
                },
                {
                    title: 'Lunch',
                    start: '2014-06-12',
                    className: 'bgm-cyan'
                },
                {
                    title: 'Birthday',
                    start: '2014-06-13',
                    className: 'bgm-amber'
                },
                {
                    title: 'Google',
                    url: 'http://google.com/',
                    start: '2014-06-28',
                    className: 'bgm-amber'
                }
            ]
        });
    })();

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

}]);
