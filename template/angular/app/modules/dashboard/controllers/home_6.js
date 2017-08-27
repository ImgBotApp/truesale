
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


        if ($('#c-weather')[0]) {
            $.simpleWeather({
                location: 'Austin, TX',
                woeid: '',
                unit: 'f',
                success: function (weather) {
                    var html = '<div class="cw-current media">' +
                        '<div class="pull-left cwc-icon cwci-' + weather.code + '"></div>' +
                        '<div class="cwc-info media-body">' +
                        '<div class="cwci-temp">' + weather.temp + '&deg;' + weather.units.temp + '</div>' +
                        '<ul class="cwci-info">' +
                        '<li>' + weather.city + ', ' + weather.region + '</li>' +
                        '<li>' + weather.currently + '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>' +
                        '<div class="cw-upcoming"></div>';

                    $("#c-weather").html(html);

                    setTimeout(function () {


                        for (i = 0; i < 5; i++) {
                            var l = '<ul class="clearfix">' +
                                '<li class="m-r-15">' +
                                '<i class="cwc-icon cwci-sm cwci-' + weather.forecast[i].code + '"></i>' +
                                '</li>' +
                                '<li class="cwu-forecast">' + weather.forecast[i].high + '/' + weather.forecast[i].low + '</li>' +
                                '<li>' + weather.forecast[i].text + '</li>' +
                                '</ul>';

                            $('.cw-upcoming').append(l);
                        }
                    });
                },
                error: function (error) {
                    $("#c-weather").html('<p>' + error + '</p>');
                }
            });
        }



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

        if (document.getElementById('lineChart')) {
            var ctx = document.getElementById("lineChart").getContext("2d");
            var myNewChart = new Chart(ctx).Line(lineData, lineOptions);
        }


        var polarData = [
            {
                value: 300,
                color: "#F44336",
                highlight: "#3d3f4b",
                label: "App"
            },
            {
                value: 140,
                color: "#8BC34A",
                highlight: "#3d3f4b",
                label: "Software"
            },
            {
                value: 200,
                color: "#FFCA28",
                highlight: "#3d3f4b",
                label: "Laptop"
            }
        ];

        var polarOptions = {
            scaleShowLabelBackdrop: true,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBeginAtZero: true,
            scaleBackdropPaddingY: 1,
            scaleBackdropPaddingX: 1,
            scaleShowLine: true,
            segmentShowStroke: true,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: true,
            animateScale: false,
            responsive: true

        };
        if (document.getElementById('polarChart')){
            var ctx = document.getElementById("polarChart").getContext("2d");
            var myNewChart = new Chart(ctx).PolarArea(polarData, polarOptions);
        }



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

        /* Make some random data for the Chart*/

        var d1 = [];
        for (var i = 0; i <= 10; i += 1) {
            d1.push([i, parseInt(Math.random() * 30)]);
        }
        var d2 = [];
        for (var i = 0; i <= 25; i += 4) {
            d2.push([i, parseInt(Math.random() * 30)]);
        }
        var d3 = [];
        for (var i = 0; i <= 10; i += 1) {
            d3.push([i, parseInt(Math.random() * 30)]);
        }

        /* Chart Options */

        var options = {
            series: {
                shadowSize: 0,
                curvedLines: { //This is a third party plugin to make curved lines
                    apply: true,
                    active: true,
                    monotonicFit: true
                },
                lines: {
                    show: false,
                    lineWidth: 0
                }
            },
            grid: {
                borderWidth: 0,
                labelMargin:10,
                hoverable: true,
                clickable: true,
                mouseActiveRadius:6

            },
            xaxis: {
                tickDecimals: 0,
                ticks: false
            },

            yaxis: {
                tickDecimals: 0,
                ticks: false
            },

            legend: {
                show: false
            }
        };

        /* Let's create the chart */

        if ($("#curved-line-chart")[0]) {
            $.plot($("#curved-line-chart"), [
                {data: d1, lines: { show: true, fill: 0.98 }, label: 'Product 1', stack: true, color: '#8BC34A' },
                {data: d3, lines: { show: true, fill: 0.98 }, label: 'Product 2', stack: true, color: '#FFCA28' }
            ], options);
        }


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
