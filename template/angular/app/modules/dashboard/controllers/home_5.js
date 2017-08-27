
dashboard.controller("HomeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
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


    $("#sparkline8").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], {
        type: 'bar',
        barWidth: 15,
        height: '150px',
        barColor: '#149957',
        negBarColor: '#40b87b'});
    $(".sparkline8").sparkline([4, 2], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline9").sparkline([3, 2], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline10").sparkline([4, 1], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline11").sparkline([1, 3], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline12").sparkline([3, 5], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });
    $(".sparkline13").sparkline([6, 2], {
        type: 'pie',
        sliceColors: ['#01a8fe', '#ddd']
    });

    //moris chart
    $(function () {




        var lineData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Example dataset",
                    fillColor: "#8BC34A",
                    strokeColor: "#FFCA28",
                    pointColor: "#009688",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#FFCA28",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "Example dataset",
                    fillColor: "#FFCA28",
                    strokeColor: "#8BC34A",
                    pointColor: "#F44336",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#009688",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        var lineOptions = {
            scaleShowGridLines: true,
            scaleGridLineColor: "#ddd",
            scaleGridLineWidth: 1,
            bezierCurve: true,
            bezierCurveTension: 0.4,
            pointDot: true,
            pointDotRadius: 4,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
            responsive: true
        };


        var ctx = document.getElementById("lineChart").getContext("2d");
        var myNewChart = new Chart(ctx).Line(lineData, lineOptions);


        var data = [{
            label: "Sales 1",
            data: 21,
            color: "#d3d3d3"
        }, {
            label: "Sales 2",
            data: 3,
            color: "#bababa"
        }, {
            label: "Sales 3",
            data: 15,
            color: "#79d2c0"
        }, {
            label: "Sales 4",
            data: 52,
            color: "#01a8fe"
        }];



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

    $('#world-map').vectorMap({
        map: 'world_mill_en',
        scaleColors: ['#666', '#29b6d8'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 1.0
        },
        zoomMin: 0.85,
        markerStyle: {
            initial: {
                fill: '#fff',
                stroke: '#fff',
                color: '#ffffff'
            }
        },
        backgroundColor: '#fff',
        regionStyle: {
            initial: {
                fill: '#8BC34A',
                "fill-opacity": 1,
                stroke: '#87c2e0',
                "stroke-width": 0,
                "stroke-opacity": 0
            },
            hover: {
                "fill-opacity": 0.8
            },
            selected: {
                fill: 'yellow'
            }
        },
        markers: [
            //http://www.latlong.net/
            {latLng: [51.507351, -0.127758], name: 'London'},
            {latLng: [41.385064, 2.173403], name: 'Barcelona'},
            {latLng: [40.712784, -74.005941], name: 'New York'},
            {latLng: [-22.911632, -43.188286], name: 'Rio De Janeiro'},
            {latLng: [49.282729, -123.120738], name: 'Vancuver'},
            {latLng: [35.689487, 139.691706], name: 'Tokio'},
            {latLng: [55.755826, 37.617300], name: 'Moskva'},
            {latLng: [43.214050, 27.914733], name: 'Varna'},
            {latLng: [30.044420, 31.235712], name: 'Cairo'}
        ]
    });
    
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

}]);
