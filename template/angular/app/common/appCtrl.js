
app.controller("appCtrl", ['$rootScope', '$scope', '$state', '$location', 'Flash','appSettings',
    function ($rootScope, $scope, $state, $location, Flash,appSettings) {


        var vm = this;
        //avalilable themes
        vm.themes = [
            {
                theme: "default",
                icon:"images/c1.jpg"
            },
            {
                theme: "green",
                icon:"images/c2.jpg"
            },
            {
                theme: "gold",
                icon:"images/c3.jpg"
            },
            {
                theme: "red",
                icon:"images/c4.jpg"
            },
            {
                theme: "black",
                icon:"images/c5.jpg"
            },
            {
                theme: "dark",
                icon:"images/c6.jpg"
            },
            {
                theme: "green dark",
                icon:"images/c7.jpg"
            },
            {
                theme: "gold dark",
                icon:"images/c8.jpg"
            },
            {
                theme: "red dark",
                icon: "images/c9.jpg"
            },
            {
                theme: "black dark",
                icon: "images/c10.jpg"
            }
        ];

        //set the theme selected
        vm.setTheme = function (value) {
            $rootScope.theme = value;
        };


        //set the Layout in normal view
        vm.setLayout = function (value) {
            $rootScope.layout = value;
        };

        vm.bodyClasses = 'default';

// this'll be called on every state change in the app
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            if (angular.isDefined(toState.data.bodyClasses)) {
                vm.bodyClasses = toState.data.bodyClasses;
                return;
            }

            vm.bodyClasses = 'default';
        });

        //Main menu items of the dashboard
        vm.menuItems = [
            {
                title: "Dashboard",
                icon: " icon-grid",
                state: "",
                sub_itmes: [
                    {title: "Dashboard v1", state: "dashboard"},
                    {title: "Dashboard v2", state: "dashboard_v2"},
                    {title: "Dashboard v3", state: "dashboard_v3"}
                    //{title: "Dashboard v4", state: "dashboard_v4"}
                ]
            },
            {
                title: "Ecommerce",
                icon: " icon-basket",
                state: "",
                sub_itmes: [
                    {title: "Product List", state: "products"},
                    {title: "orders", state: "orders"},
                    {title: "order Detail", state: "order-detail"},
                    {title: "Order Invoice", state: "order-invoice"}
                ]
            },
            {
                title: "Widgets",
                icon: "cog",
                state: "widgets"
            },
            {
                title: "Mailbox",
                icon: "envelope",
                state: "",
                sub_itmes: [
                    {title: "inbox", state: "mailbox"},
                    {title: "Email view", state: "mail_detail"},
                    {title: "Compose email", state: "mail_compose"}
                ]
            },

            {
                title: "Graphs",
                icon: "bar-chart",
                state: "",
                sub_itmes: [
                    {title: "Flot charts", state: "flot_charts"},
                    {title: "Morris.js", state: "morris_js"},
                    {title: "Chart.js", state: "chart_js"},
                    {title: "C3", state: "c3"},
                   // {title: "Chart Sparkline", state: "chart_sparkline"}
                    //{title: "Pie Charts", state: "pie_charts"}
                ]
            },
            {
                title: "Forms",
                icon: "edit",
                state: "",
                sub_itmes: [
                    {title: "Basic form", state: "form_basic"},
                    {title: "Advanced form", state: "form_advanced"},
                    {title: "Wizard form", state: "form_wizard"},
                    {title: "Form Masked", state: "form_masked"},
                    {title: "File upload", state: "form_file_upload"},
                    {title: "File Dropzone", state: "file_drop"},
                    {title: "Text editor", state: "form_text_editor"},
                    {title: "Inline edit", state: "form_inline_edit"},
                    {title: "Form Validation", state: "form_validate"},
                    {title: "Tinymce Editor", state: "form_tinymce"},
                    {title: "WYSIHTML5 Editor", state: "form_wysihtml5"}
                ]
            },
            {
                title: "Other Pages",
                icon: "files-o",
                state: "",
                sub_itmes: [
                    {title: "Lockscreen", state: "lockscreen"},
                    {title: "Login", state: "login"},
                    {title: "Register", state: "register"},
                    {title: "404 Page", state: "404"},
                    {title: "Empty page", state: "empty_page"},
                    {title: "gallery", state: "gallery"},
                    {title: "Price tables", state: "price_tables"},
                    {title: "Contact Page", state: "page_contact"}
                ]
            },

            {
                title: "Icons",
                icon: "hourglass-o",
                state: "",
                sub_itmes: [
                    {title: "Icons", state: "icons"},
                    {title: "Weather Icon", state: "weather-icon"},
                    {title: "Themify Icons", state: "themifyicons"},
                    {title: "Linea Arrows", state: "linea_arrows"},
                    {title: "Linea Basic", state: "linea_basic"}
                ]
            },
            {
                title: "UI Elements",
                icon: "flask",
                state: "",
                sub_itmes: [
                    {title: "Typography", state: "typography"},
                    {title: "Buttons", state: "buttons"},
                    {title: "Video", state: "video"},
                    {title: "Panels", state: "tabs_panels"},
                    {title: "Tabs", state: "tabs"},
                    {title: "Chat", state: "chat"},
                    {title: "Alert & notifications", state: "alert_notifications"},
                    {title: "Tree View", state: "tree_view"},
                    {title: "Timeline", state: "timeline"},
                    {title: "Progress Bar", state: "progress_bar"},
                    {title: "Sliders", state: "sliders"},
                    {title: "Range Slider", state: "range_slider"},
                    {title: "Alert Popup", state: "alert_popup"},
                    {title: "Accordion", state: "accordion"},
                    {title: "Models", state: "models"},
                    {title: "Toastr Alert", state: "toastr_alert"}
                ]
            },
            {
                title: "Grid options",
                icon: "laptop",
                state: "grid_options"
            },
            {
                title: "Tables",
                icon: "table",
                state: "",
                sub_itmes: [
                    {title: "Static Tables", state: "table_basic"},
                    {title: "Data Tables", state: "table_data_tables"},
                    {title: "Responsive Tables", state: "table_responsive"},
                    {title: "Editable Tables", state: "table_editable"},
                    {title: "JSGrid Tables", state: "table_jsgrid"}
                ]
            },
            {
                title: "Users",
                icon: "users",
                state: "",
                sub_itmes: [
                    {title: "profile", state: "user_profile"},
                    {title: "User list", state: "user_list"}
                ]
            },
            {
                title: "maps",
                icon: "map-marker",
                state: "",
                sub_itmes: [
                    {title: "Google maps", state: "google_maps"},
                    {title: "Vector Maps", state: "vector_maps"}
                ]
            },
            {
                title: "Blog",
                icon: "pencil",
                state: "",
                sub_itmes: [
                    {title: "Blog list", state: "blog_list"},
                    {title: "Blog post", state: "blog_post"}
                ]
            },
            {
                title: "Calendar",
                icon: "calendar",
                state: "calendar"
            }
        ];


        //controll sidebar open & close in mobile and normal view



        //navigate to search page
        vm.search = function () {
            $state.go('app.search');
        };




        $(document).ready(function () {
            if ($(this).width() < 769) {
                $('body').addClass('page-small1');
            } else {
                $('body').removeClass('page-small1');
                $('body').removeClass('show-sidebar');
            }

            // MetsiMenu
            //$('#side-menu').metisMenu();

            // Minimalize menu
            $('.navbar-minimalize').click(function () {

                $("body").toggleClass("page-small1");


            });

        });

        !function($) {
            "use strict";
            // Minimalize menu
            $('.navbar-minimalize').click(function () {
                $("body").toggleClass("mini-navbar");
            });
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover()
            // $.material.init();




        }(window.jQuery);


        (function () {

            $('.fa-search').on('click', function () {
                $('.search').fadeIn(500, function () {
                    $(this).toggleClass('search-toggle');
                });
            });

            $('.search-close').on('click', function () {
                $('.search').fadeOut(500, function () {
                    $(this).removeClass('search-toggle');
                });
            });

        }());


        // Panels
        (function ($) {

            $(function () {
                $('.panel')
                    .on('panel:toggle', function () {
                        var $this,
                            direction;

                        $this = $(this);
                        direction = $this.hasClass('panel-collapsed') ? 'Down' : 'Up';

                        $this.find('.panel-body, .panel-footer')[ 'slide' + direction ](200, function () {
                            $this[ (direction === 'Up' ? 'add' : 'remove') + 'Class' ]('panel-collapsed')
                        });
                    })
                    .on('panel:dismiss', function () {
                        var $this = $(this);

                        if (!!($this.parent('div').attr('class') || '').match(/col-(xs|sm|md|lg)/g) && $this.siblings().length === 0) {
                            $row = $this.closest('.row');
                            $this.parent('div').remove();
                            if ($row.children().length === 0) {
                                $row.remove();
                            }
                        } else {
                            $this.remove();
                        }
                    })
                    .on('click', '[data-panel-toggle]', function (e) {
                        e.preventDefault();
                        $(this).closest('.panel').trigger('panel:toggle');
                    })
                    .on('click', '[data-panel-dismiss]', function (e) {
                        e.preventDefault();
                        $(this).closest('.panel').trigger('panel:dismiss');
                    })
                    /* Deprecated */
                    .on('click', '.panel-actions a.fa-caret-up', function (e) {
                        e.preventDefault();
                        var $this = $(this);

                        $this
                            .removeClass('fa-caret-up')
                            .addClass('fa-caret-down');

                        $this.closest('.panel').trigger('panel:toggle');
                    })
                    .on('click', '.panel-actions a.fa-caret-down', function (e) {
                        e.preventDefault();
                        var $this = $(this);

                        $this
                            .removeClass('fa-caret-down')
                            .addClass('fa-caret-up');

                        $this.closest('.panel').trigger('panel:toggle');
                    })
                    .on('click', '.panel-actions a.fa-times', function (e) {
                        e.preventDefault();
                        var $this = $(this);

                        $this.closest('.panel').trigger('panel:dismiss');
                    });
            });

            $('.ti-settings').on('click', function () {
                $(".adminoption").toggle();
            });
            $('.layout').on('click', function () {
                if($(this).val()=="box")
                {
                    $('body').addClass('box-layout');
                }
                else
                {
                    $('body').removeClass('box-layout');
                }
            });

            $('.menu').on('click', function () {
                $('body').removeClass('normal');
                $('body').removeClass('icon-menu');
                $('body').removeClass('top');
                $('body').addClass($(this).val());

            });
        })(jQuery);

//tooltips
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover()
        });




        console.log('getting in to the app controller');

    }]);



app.directive('routeCssClassnames', routeCssClassnames);

function routeCssClassnames($rootScope) {
    return {
        restrict: 'A',
        scope: {},
        link: function (scope, elem, attr, ctrl) {

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                var fromClassnames = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.cssClassnames) ? fromState.data.cssClassnames : null;
                var toClassnames = angular.isDefined(toState.data) && angular.isDefined(toState.data.cssClassnames) ? toState.data.cssClassnames : null;

                // don't do anything if they are the same
                if (fromClassnames != toClassnames) {
                    if (fromClassnames) {
                        elem.removeClass(fromClassnames);
                    }

                    if (toClassnames) {
                        elem.addClass(toClassnames);
                    }
                }
            });
        }
    }
}


app.directive('showTab', function () {
    return {
        link: function (scope, element, attrs) {
            element.click(function (e) {
                e.preventDefault();
                jQuery(element).tab('show');
            });
        }
    };
});


app.controller("HomeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $scope.viewCountOptions = {
            responsive: false
        };
        //vm.showDetails = true;
        vm.home = {};

        !function($) {
            "use strict";
            $(function(){


                toastr.options = {
                    "debug": false,
                    "newestOnTop": false,
                    "positionClass": "toast-bottom-right",
                    "closeButton": true,
                    "progressBar": true
                };

                toastr.info('Info - This is a custom info notification');

                setTimeout(function(){
                    toastr.success('Success - This is a success notification');
                }, 1000);
                setTimeout(function(){
                    toastr.warning('Warning - This is a warning notification');
                }, 2000);
                setTimeout(function(){
                    toastr.error('Error - This is a error notification');
                }, 3000);







                $('.scrollerchat').slimScroll({
                    height: '393px'
                });
                var chart = c3.generate({
                    bindto: '#demo1',
                    data: {
                        columns: [
                            ['data1', 30, 20, 50, 40, 60, 50],
                            ['data2', 200, 130, 90, 240, 130, 220],
                            ['data3', 300, 200, 160, 400, 250, 250]
                        ]
                    }
                });
                var chart = c3.generate({
                    bindto: '#spline',
                    data: {
                        columns: [
                            ['data1', 30],
                            ['data2', 120],
                        ],
                        type : 'donut',
                        colors: {
                            data1: '#ff0000',
                            data2: '#4CAF50',
                            data3: '#00bcd4',

                        },
                        onclick: function (d, i) { console.log("onclick", d, i); },
                        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                    },
                    donut: {
                        title: "Iris Petal Width"
                    }
                });

//Map
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
                            fill: '#00bcd4',
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


                ///Calendar
                (function () {
                    $('#cw-body').fullCalendar({

                        header: {
                            left: 'prev, next',
                            center: 'title',
                            right: 'month, agendaWeek, agendaDay'
                        },
                        buttonIcons: {
                            prev: 'none fa fa-arrow-left',
                            next: 'none fa fa-arrow-right',
                            prevYear: 'none fa fa-arrow-left',
                            nextYear: 'none fa fa-arrow-right'
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
                                title: 'Long',
                                start: '2014-06-07',
                                end: '2014-06-8',
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
                                start: '2014-06-10',
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

            });



            Morris.Area({
                element: 'morris-area-chart2',
                data: [{
                    period: '2010',
                    SiteA: 0,
                    SiteB: 0,

                }, {
                    period: '2011',
                    SiteA: 130,
                    SiteB: 100,

                }, {
                    period: '2012',
                    SiteA: 80,
                    SiteB: 60,

                }, {
                    period: '2013',
                    SiteA: 70,
                    SiteB: 200,

                }, {
                    period: '2014',
                    SiteA: 180,
                    SiteB: 150,

                }, {
                    period: '2015',
                    SiteA: 105,
                    SiteB: 90,

                },
                    {
                        period: '2016',
                        SiteA: 250,
                        SiteB: 150,

                    }],
                xkey: 'period',
                ykeys: ['SiteA', 'SiteB'],
                labels: ['Site A', 'Site B'],
                pointSize: 0,
                fillOpacity: 0.4,
                pointStrokeColors:['#b4becb', '#01c0c8'],
                behaveLikeLine: true,
                gridLineColor: '#e0e0e0',
                lineWidth: 0,
                smooth: false,
                hideHover: 'auto',
                lineColors: ['#b4becb', '#01c0c8'],
                resize: true

            });


        }(window.jQuery);

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);



app.controller("WidgetsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        //vm.showDetails = true;
        vm.home = {};

        !function($) {
            "use strict";
            $(function(){

                $('.vcarousel').carousel({
                    interval: 3000
                });

                $('.scrollerchat').slimScroll({
                    height: '393px'
                });
                var chart = c3.generate({
                    bindto: '#demo1',
                    data: {
                        columns: [
                            ['data1', 30, 20, 50, 40, 60, 50],
                            ['data2', 200, 130, 90, 240, 130, 220],
                            ['data3', 300, 200, 160, 400, 250, 250]
                        ]
                    }
                });

                $("#sparkline3").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
                    type: 'line',
                    width: '100%',
                    height: '60',
                    lineColor: '#fff',
                    fillColor: "#1AAADA"
                });
                $("#sparkline4").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
                    type: 'line',
                    width: '100%',
                    height: '60',
                    lineColor: '#fff',
                    fillColor: "#7986CB"
                });
                var chart = c3.generate({
                    bindto: '#spline',
                    data: {
                        columns: [
                            ['data1', 30],
                            ['data2', 120],
                        ],
                        type : 'donut',
                        colors: {
                            data1: '#ff0000',
                            data2: '#4CAF50',
                            data3: '#00bcd4'

                        },
                        onclick: function (d, i) { console.log("onclick", d, i); },
                        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                    },
                    donut: {
                        title: "Iris Petal Width"
                    }
                });

//Map
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
                            fill: '#00bcd4',
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


                ///Calendar
                (function () {
                    $('#cw-body').fullCalendar({

                        header: {
                            left: 'prev, next',
                            center: 'title',
                            right: 'month, agendaWeek, agendaDay'
                        },
                        buttonIcons: {
                            prev: 'none fa fa-arrow-left',
                            next: 'none fa fa-arrow-right',
                            prevYear: 'none fa fa-arrow-left',
                            nextYear: 'none fa fa-arrow-right'
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
                                title: 'Long',
                                start: '2014-06-07',
                                end: '2014-06-8',
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
                                start: '2014-06-10',
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

            });



        }(window.jQuery);

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);



app.controller("HomeSixController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

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

        $(document).ready(function(){

            $("#sparkline8").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], {
                type: 'bar',
                barWidth: 15,
                height: '150px',
                barColor: '#149957',
                negBarColor: '#40b87b'});

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

            var ctx = document.getElementById("polarChart").getContext("2d");
            var myNewChart = new Chart(ctx).PolarArea(polarData, polarOptions);

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

            /* Let's create the chart */

            if ($("#curved-line-chart")[0]) {
                $.plot($("#curved-line-chart"), [
                    {data: d1, lines: { show: true, fill: 0.98 }, label: 'Product 1', stack: true, color: '#8BC34A' },
                    {data: d3, lines: { show: true, fill: 0.98 }, label: 'Product 2', stack: true, color: '#FFCA28' }
                ], options);
            }

            $('.panel-action-dismiss').click(function(){
                $(this).parent().parent().parent('.panel').parent().remove();
            });

        });

}]);

app.controller("HomeTwoController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        //vm.showDetails = true;
        vm.home = {};

        !function($) {
            "use strict";
            $(function(){

                //pie chart
                c3.generate({
                    bindto: '#piechart',
                    data: {
                        columns: [
                            ['Pending', 30],
                            ['Completed', 70],
                            ['Behind', 50]
                        ],
                        colors: {
                            Pending: '#F44336',
                            Completed: '#00bcd4',
                            Behind:'#4CAF50'
                        },
                        type: 'pie'
                    }
                });
            });

            /// Monthaly Project report

            var chart = c3.generate({
                bindto: '#columnchart_material',
                data: {
                    columns: [
                        ['Projects', 30, 200, 100, 400, 150, 250],
                        ['Todo', 50, 20, 10, 40, 15, 25],
                        ['Users', 130, 220, 140, 200, 250, 450],

                    ]
                },
                color: {
                    pattern: ['#1f77b4', '#aec7e8', '#ff7f0e']
                }
            });
            $('.vcarousel').carousel({
                interval: 3000
            })

        }(window.jQuery);


        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);


app.controller("HomeThreeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        //vm.showDetails = true;
        vm.home = {};


        !!function($) {
            "use strict";
            $(function(){

                $('.scrollerchat').slimScroll({
                    height: '415px'
                });
                $("#sparkline3").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
                    type: 'line',
                    width: '100%',
                    height: '60',
                    lineColor: '#fff',
                    fillColor: "#1AAADA"
                });
                $("#sparkline4").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
                    type: 'line',
                    width: '100%',
                    height: '60',
                    lineColor: '#fff',
                    fillColor: "#7986CB"
                });
// Dashboard 1 Morris-chart


                Morris.Area({
                    element: 'morris-area-chart2',
                    data: [{
                        period: '2010',
                        SiteA: 0,
                        SiteB: 0

                    }, {
                        period: '2011',
                        SiteA: 130,
                        SiteB: 100

                    }, {
                        period: '2012',
                        SiteA: 80,
                        SiteB: 60

                    }, {
                        period: '2013',
                        SiteA: 70,
                        SiteB: 200

                    }, {
                        period: '2014',
                        SiteA: 180,
                        SiteB: 150

                    }, {
                        period: '2015',
                        SiteA: 105,
                        SiteB: 90

                    },
                        {
                            period: '2016',
                            SiteA: 250,
                            SiteB: 150

                        }],
                    xkey: 'period',
                    ykeys: ['SiteA', 'SiteB'],
                    labels: ['Site A', 'Site B'],
                    pointSize: 0,
                    fillOpacity: 0.4,
                    pointStrokeColors:['#b4becb', '#01c0c8'],
                    behaveLikeLine: true,
                    gridLineColor: '#e0e0e0',
                    lineWidth: 0,
                    smooth: false,
                    hideHover: 'auto',
                    lineColors: ['#b4becb', '#01c0c8'],
                    resize: true

                });


                $('.vcarousel').carousel({
                    interval: 3000
                });
            });
        }(window.jQuery);

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);


app.controller("HomeFourController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        //vm.showDetails = true;
        vm.home = {};

        !function($) {
            "use strict";
            $(function(){


                $('.scrollerchat').slimScroll({
                    height: '393px'
                });
                var chart = c3.generate({
                    bindto: '#demo1',
                    data: {
                        columns: [
                            ['data1', 30, 20, 50, 40, 60, 50],
                            ['data2', 200, 130, 90, 240, 130, 220],
                            ['data3', 300, 200, 160, 400, 250, 250]
                        ]
                    }
                });
                var chart = c3.generate({
                    bindto: '#spline',
                    data: {
                        columns: [
                            ['data1', 30],
                            ['data2', 120],
                        ],
                        type : 'donut',
                        colors: {
                            data1: '#ff0000',
                            data2: '#4CAF50',
                            data3: '#00bcd4'

                        },
                        onclick: function (d, i) { console.log("onclick", d, i); },
                        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                    },
                    donut: {
                        title: "Iris Petal Width"
                    }
                });
                google.charts.load('current', {'packages':['bar','timeline']});
                google.charts.setOnLoadCallback(drawChart);
                function drawChart() {
                    var data = google.visualization.arrayToDataTable([
                        ['Year', 'Sales', 'Expenses', 'Profit'],
                        ['2014', 1000, 400, 200],
                        ['2015', 1170, 460, 250],
                        ['2016', 660, 1120, 300],
                        ['2017', 1030, 540, 350]
                    ]);

                    var options = {
                        chart: {
                            title: 'Company Performance',
                            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                        }
                    };

                    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

                    chart.draw(data, options);      }




                ///Timeline Chart

                google.charts.setOnLoadCallback(drawCharttimeline);
                function drawCharttimeline() {
                    var container = document.getElementById('timeline');
                    var chart = new google.visualization.Timeline(container);
                    var dataTable = new google.visualization.DataTable();

                    dataTable.addColumn({ type: 'string', id: 'President' });
                    dataTable.addColumn({ type: 'date', id: 'Start' });
                    dataTable.addColumn({ type: 'date', id: 'End' });
                    dataTable.addRows([
                        [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
                        [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
                        [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

                    chart.draw(dataTable);
                }

                ///Calendar
                (function () {
                    $('#cw-body').fullCalendar({

                        header: {
                            left: 'prev, next',
                            center: 'title',
                            right: 'month, agendaWeek, agendaDay'
                        },
                        buttonIcons: {
                            prev: 'none fa fa-arrow-left',
                            next: 'none fa fa-arrow-right',
                            prevYear: 'none fa fa-arrow-left',
                            nextYear: 'none fa fa-arrow-right'
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
                                title: 'Long',
                                start: '2014-06-07',
                                end: '2014-06-8',
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
                                start: '2014-06-10',
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

            });



        }(window.jQuery);

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);


app.controller("AlertController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        document.querySelector('.timer-alert').onclick = function () {
            swal({
                title: "Auto close alert!",
                text: "I will close in 3 seconds.",
                timer: 3000,
                showConfirmButton: false
            });
        };
        document.querySelector('.success-alert').onclick = function () {
            swal("Good job!", "You clicked the button!", "success");
        };
        document.querySelector('.simple-alert').onclick = function () {
            swal({
                title: "Welcome in Alerts",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            });
        };
        document.querySelector('.warning-alert').onclick = function () {
            swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Yes, delete it!',
                    closeOnConfirm: false
                },
                function () {
                    swal("Deleted!", "Your imaginary file has been deleted!", "success");
                });
        };

        //tooltips
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover()
        });

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);


app.controller("CalendarController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        ///Calendar
        (function () {
            $('#cw-body').fullCalendar({

                header: {
                    left: 'prev, next',
                    center: 'title',
                    right: 'month, agendaWeek, agendaDay'
                },
                buttonIcons: {
                    prev: 'none fa fa-arrow-left',
                    next: 'none fa fa-arrow-right',
                    prevYear: 'none fa fa-arrow-left',
                    nextYear: 'none fa fa-arrow-right'
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
                        title: 'Long',
                        start: '2014-06-07',
                        end: '2014-06-8',
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
                        start: '2014-06-10',
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

    }]);

app.controller("ChartController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        !function($) {
            "use strict";
            $(function(){
                var ctx1 = document.getElementById("placeholder").getContext("2d");
                var data1 = {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fillColor: "transparent",
                            strokeColor: "#DC3912",
                            pointColor: "#DC3912",
                            data: [65, 59, 80, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            fillColor: "transparent",
                            strokeColor: "#3366CC",
                            pointColor: "#3366CC",
                            data: [28, 48, 40, 19, 86, 27, 90]
                        }
                    ]
                };
                var chart1 = new Chart(ctx1).Line(data1, {
                    scaleShowGridLines : true,
                    scaleGridLineColor : "rgba(0,0,0,.05)",
                    scaleGridLineWidth : 1,
                    scaleShowHorizontalLines: true,
                    scaleShowVerticalLines: false,
                    bezierCurve : false,
                    bezierCurveTension : 0.4,
                    pointDot : false,
                    pointDotRadius : 4,
                    pointDotStrokeWidth : 1,
                    pointHitDetectionRadius : 20,
                    datasetStroke : true,
                    datasetStrokeWidth : 2,
                    datasetFill : true,
                    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                    responsive: true,
                    tooltipCornerRadius: 2,
                    scaleOverride: true,
                    scaleSteps: 6,
                    scaleStepWidth: 15,
                    scaleStartValue: 0
                });


                var ctx2 = document.getElementById("canvas").getContext("2d");
                var data2 = {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fillColor: "#9575CD",
                            strokeColor: "transparent",
                            highlightFill: "#9575CD",
                            highlightStroke: "#B3B3B3",
                            data: [65, 59, 80, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            fillColor: "#33AC71",
                            strokeColor: "transparent",
                            highlightFill: "#33AC71",
                            highlightStroke: "#B3B3B3",
                            data: [28, 48, 40, 19, 86, 27, 90]
                        }
                    ]
                };

                var chart2 = new Chart(ctx2).Bar(data2, {
                    scaleBeginAtZero : true,
                    scaleShowGridLines : true,
                    scaleGridLineColor : "rgba(0,0,0,.05)",
                    scaleGridLineWidth : 1,
                    scaleShowHorizontalLines: true,
                    scaleShowVerticalLines: false,
                    barShowStroke : true,
                    barStrokeWidth : 2,
                    barDatasetSpacing : 1,
                    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                    responsive: true,
                    scaleOverride: true,
                    scaleSteps: 6,
                    scaleStepWidth: 15,
                    scaleStartValue: 0,
                    barValueSpacing: 20,
                    tooltipCornerRadius: 2
                });


                var ctx3 = document.getElementById("redar").getContext("2d");
                var data3 = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fillColor: "rgba(241,202,58,0.2)",
                            strokeColor: "#F1CA3A",
                            pointColor: "#F1CA3A",
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            fillColor: "rgba(83,168,251,0.2)",
                            strokeColor: "#53A8FB",
                            pointColor: "#53A8FB",
                            data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ]
                };

                var myRadarChart = new Chart(ctx3).Radar(data3, {
                    scaleShowLine : true,
                    angleShowLineOut : true,
                    scaleShowLabels : false,
                    scaleBeginAtZero : true,
                    angleLineColor : "rgba(0,0,0,.1)",
                    angleLineWidth : 1,
                    pointLabelFontFamily : "'Arial'",
                    pointLabelFontStyle : "normal",
                    pointLabelFontSize : 10,
                    pointLabelFontColor : "#666",
                    pointDot : false,
                    pointDotRadius : 3,
                    pointDotStrokeWidth : 1,
                    pointHitDetectionRadius : 20,
                    datasetStroke : true,
                    datasetStrokeWidth : 2,
                    datasetFill : true,
                    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                    responsive: true,
                    tooltipCornerRadius: 2,
                    scaleOverride: true,
                    scaleSteps: 6,
                    scaleStepWidth: 15,
                    scaleStartValue: 0
                });



                var ctx4 = document.getElementById("pie").getContext("2d");
                var data4 = [
                    {
                        value: 300,
                        color:"#9575CD",
                        highlight: "#9575CD",
                        label: "Purple"
                    },
                    {
                        value: 50,
                        color: "#33AC71",
                        highlight: "#33AC71",
                        label: "Green"
                    },
                    {
                        value: 100,
                        color: "#53A8FB",
                        highlight: "#53A8FB",
                        label: "Blue"
                    }
                ];

                var myPieChart = new Chart(ctx4).Pie(data4,{
                    segmentShowStroke : true,
                    segmentStrokeColor : "#fff",
                    segmentStrokeWidth : 2,
                    animationSteps : 100,
                    animationEasing : "easeOutBounce",
                    animateRotate : true,
                    animateScale : false,
                    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
                    responsive: true,
                    tooltipCornerRadius: 2
                });



            });



        }(window.jQuery);
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);

app.controller("C3Controller", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        !function($) {
            "use strict";
            $(function(){



                var chart = c3.generate({
                    bindto: '#demo1',
                    data: {
                        columns: [
                            ['data1', 30, 20, 50, 40, 60, 50],
                            ['data2', 200, 130, 90, 240, 130, 220],
                            ['data3', 300, 200, 160, 400, 250, 250]
                        ]
                    }
                });



                var chart = c3.generate({
                    bindto: '#columnchart_material',
                    data: {
                        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                        columns: [
                            ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                            ['data1', 30, 200, 100, 400, 150, 250],
                            ['data2', 130, 340, 200, 500, 250, 350]
                        ]
                    },
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                format: '%Y-%m-%d'
                            }
                        }
                    }
                });

                setTimeout(function () {
                    chart.load({
                        columns: [
                            ['data3', 400, 500, 450, 700, 600, 500]
                        ]
                    });
                }, 1000);


                var chart = c3.generate({
                    bindto: '#spline',
                    data: {
                        columns: [
                            ['data1', 30, 200, 100, 400, 150, 250],
                            ['data2', 130, 100, 140, 200, 150, 50]
                        ],
                        type: 'spline'
                    }
                });

                var chart = c3.generate({
                    bindto: '#donut',
                    data: {
                        columns: [
                            ['data1', 30],
                            ['data2', 120],
                        ],
                        type : 'donut',
                        onclick: function (d, i) { console.log("onclick", d, i); },
                        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                    },
                    donut: {
                        title: "Iris Petal Width"
                    }
                });

                var chart = c3.generate({
                    bindto: '#combination',
                    data: {
                        columns: [
                            ['data1', 30, 20, 50, 40, 60, 50],
                            ['data2', 200, 130, 90, 240, 130, 220],
                            ['data3', 300, 200, 160, 400, 250, 250],
                            ['data4', 200, 130, 90, 240, 130, 220],
                            ['data5', 130, 120, 150, 140, 160, 150],
                            ['data6', 90, 70, 20, 50, 60, 120],
                        ],
                        type: 'bar',
                        types: {
                            data3: 'spline',
                            data4: 'line',
                            data6: 'area'
                        },
                        groups: [
                            ['data1','data2']
                        ]
                    }
                });

            });



        }(window.jQuery);


    }]);


app.controller("SparkLineController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        $(function () {
            $("#sparkline1").sparkline([52, 12, 44], {
                type: 'pie',
                height: '180px',
                sliceColors: ['#149957', '#2cbb74', '#4dde96']});
            $("#sparkline2").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7], {
                type: 'bar',
                barWidth:10,
                height: '180px',
                barColor: '#149957',
                negBarColor: '#c6c6c6'});
            $("#sparkline3").sparkline([34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44], {
                type: 'line',
                lineWidth: 1,
                height: '180px',
                lineColor: '#149957',
                fillColor: 'rgba(68, 70, 79, 0.0)'
            });
        });


        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);


app.controller("FileDropController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $(".dropzone").dropzone({ url: "/file-upload" });
    }]);



app.controller("ChartlistController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $(function () {
            $('.panel-action-dismiss').click(function(){
                $(this).parent().parent().parent('.panel').parent().remove();
            });

// horizontal bar
            new Chartist.Bar('#ct-chart4', {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                series: [
                    [5, 4, 3, 7, 5, 10, 3],
                    [3, 2, 9, 5, 4, 6, 4]
                ]
            }, {
                seriesBarDistance: 10,
                reverseData: true,
                horizontalBars: true,
                axisY: {
                    offset: 70
                }
            });

// Stocked bar chart

            new Chartist.Bar('#ct-chart3', {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                series: [
                    [800000, 1200000, 1400000, 1300000],
                    [200000, 400000, 500000, 300000],
                    [100000, 200000, 400000, 600000]
                ]
            }, {
                stackBars: true,
                axisY: {
                    labelInterpolationFnc: function (value) {
                        return (value / 1000) + 'k';
                    }
                }
            }).on('draw', function (data) {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 30px'
                        });
                    }
                });

            // Simple line

            new Chartist.Line('#ct-chart1', {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                    [12, 9, 7, 8, 5],
                    [2, 1, 3.5, 7, 3],
                    [1, 3, 4, 5, 6]
                ]
            }, {
                fullWidth: true,
                chartPadding: {
                    right: 40
                }
            });

            // Simple pie chart

            var data = {
                series: [5, 3, 4]
            };

            var sum = function (a, b) {
                return a + b
            };

            /*new Chartist.Pie('#ct-chart5', data, {
             labelInterpolationFnc: function (value) {
             return Math.round(value / data.series.reduce(sum) * 100) + '%';
             }
             });*/

            // Gauge chart

            new Chartist.Pie('#ct-chart6', {
                series: [20, 10, 30, 40]
            }, {
                donut: true,
                donutWidth: 60,
                startAngle: 270,
                total: 200,
                showLabel: false
            });

        });


    }]);



app.controller("FlotChartController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        !function($) {
            "use strict";
            $(function(){

                //Pie Chart

                var data = [],
                    series = Math.floor(Math.random() * 6) + 3;

                for (var i = 0; i < series; i++) {
                    data[i] = {
                        label: "Series" + (i + 1),
                        data: Math.floor(Math.random() * 100) + 1
                    }
                }
                $.plot('#placeholder', data, {
                    series: {
                        pie: {
                            innerRadius: 0.5,
                            show: true
                        }
                    }
                });



// Canvas Text

                var oilPrices = [[1167692400000,61.05], [1167778800000,58.32], [1167865200000,57.35], [1167951600000,56.31], [1168210800000,55.55], [1168297200000,55.64], [1168383600000,54.02], [1168470000000,51.88], [1168556400000,52.99], [1168815600000,52.99], [1168902000000,51.21], [1168988400000,52.24], [1169074800000,50.48], [1169161200000,51.99], [1169420400000,51.13], [1169506800000,55.04], [1169593200000,55.37], [1169679600000,54.23], [1169766000000,55.42], [1170025200000,54.01], [1170111600000,56.97], [1170198000000,58.14], [1170284400000,58.14], [1170370800000,59.02], [1170630000000,58.74], [1170716400000,58.88], [1170802800000,57.71], [1170889200000,59.71], [1170975600000,59.89], [1171234800000,57.81], [1171321200000,59.06], [1171407600000,58.00], [1171494000000,57.99], [1171580400000,59.39], [1171839600000,59.39], [1171926000000,58.07], [1172012400000,60.07], [1172098800000,61.14], [1172444400000,61.39], [1172530800000,61.46], [1172617200000,61.79], [1172703600000,62.00], [1172790000000,60.07], [1173135600000,60.69], [1173222000000,61.82], [1173308400000,60.05], [1173654000000,58.91], [1173740400000,57.93], [1173826800000,58.16], [1173913200000,57.55], [1173999600000,57.11], [1174258800000,56.59], [1174345200000,59.61], [1174518000000,61.69], [1174604400000,62.28], [1174860000000,62.91], [1174946400000,62.93], [1175032800000,64.03], [1175119200000,66.03], [1175205600000,65.87], [1175464800000,64.64], [1175637600000,64.38], [1175724000000,64.28], [1175810400000,64.28], [1176069600000,61.51], [1176156000000,61.89], [1176242400000,62.01], [1176328800000,63.85], [1176415200000,63.63], [1176674400000,63.61], [1176760800000,63.10], [1176847200000,63.13], [1176933600000,61.83], [1177020000000,63.38], [1177279200000,64.58], [1177452000000,65.84], [1177538400000,65.06], [1177624800000,66.46], [1177884000000,64.40], [1178056800000,63.68], [1178143200000,63.19], [1178229600000,61.93], [1178488800000,61.47], [1178575200000,61.55], [1178748000000,61.81], [1178834400000,62.37], [1179093600000,62.46], [1179180000000,63.17], [1179266400000,62.55], [1179352800000,64.94], [1179698400000,66.27], [1179784800000,65.50], [1179871200000,65.77], [1179957600000,64.18], [1180044000000,65.20], [1180389600000,63.15], [1180476000000,63.49], [1180562400000,65.08], [1180908000000,66.30], [1180994400000,65.96], [1181167200000,66.93], [1181253600000,65.98], [1181599200000,65.35], [1181685600000,66.26], [1181858400000,68.00], [1182117600000,69.09], [1182204000000,69.10], [1182290400000,68.19], [1182376800000,68.19], [1182463200000,69.14], [1182722400000,68.19], [1182808800000,67.77], [1182895200000,68.97], [1182981600000,69.57], [1183068000000,70.68], [1183327200000,71.09], [1183413600000,70.92], [1183586400000,71.81], [1183672800000,72.81], [1183932000000,72.19], [1184018400000,72.56], [1184191200000,72.50], [1184277600000,74.15], [1184623200000,75.05], [1184796000000,75.92], [1184882400000,75.57], [1185141600000,74.89], [1185228000000,73.56], [1185314400000,75.57], [1185400800000,74.95], [1185487200000,76.83], [1185832800000,78.21], [1185919200000,76.53], [1186005600000,76.86], [1186092000000,76.00], [1186437600000,71.59], [1186696800000,71.47], [1186956000000,71.62], [1187042400000,71.00], [1187301600000,71.98], [1187560800000,71.12], [1187647200000,69.47], [1187733600000,69.26], [1187820000000,69.83], [1187906400000,71.09], [1188165600000,71.73], [1188338400000,73.36], [1188511200000,74.04], [1188856800000,76.30], [1189116000000,77.49], [1189461600000,78.23], [1189548000000,79.91], [1189634400000,80.09], [1189720800000,79.10], [1189980000000,80.57], [1190066400000,81.93], [1190239200000,83.32], [1190325600000,81.62], [1190584800000,80.95], [1190671200000,79.53], [1190757600000,80.30], [1190844000000,82.88], [1190930400000,81.66], [1191189600000,80.24], [1191276000000,80.05], [1191362400000,79.94], [1191448800000,81.44], [1191535200000,81.22], [1191794400000,79.02], [1191880800000,80.26], [1191967200000,80.30], [1192053600000,83.08], [1192140000000,83.69], [1192399200000,86.13], [1192485600000,87.61], [1192572000000,87.40], [1192658400000,89.47], [1192744800000,88.60], [1193004000000,87.56], [1193090400000,87.56], [1193176800000,87.10], [1193263200000,91.86], [1193612400000,93.53], [1193698800000,94.53], [1193871600000,95.93], [1194217200000,93.98], [1194303600000,96.37], [1194476400000,95.46], [1194562800000,96.32], [1195081200000,93.43], [1195167600000,95.10], [1195426800000,94.64], [1195513200000,95.10], [1196031600000,97.70], [1196118000000,94.42], [1196204400000,90.62], [1196290800000,91.01], [1196377200000,88.71], [1196636400000,88.32], [1196809200000,90.23], [1196982000000,88.28], [1197241200000,87.86], [1197327600000,90.02], [1197414000000,92.25], [1197586800000,90.63], [1197846000000,90.63], [1197932400000,90.49], [1198018800000,91.24], [1198105200000,91.06], [1198191600000,90.49], [1198710000000,96.62], [1198796400000,96.00], [1199142000000,99.62], [1199314800000,99.18], [1199401200000,95.09], [1199660400000,96.33], [1199833200000,95.67], [1200351600000,91.90], [1200438000000,90.84], [1200524400000,90.13], [1200610800000,90.57], [1200956400000,89.21], [1201042800000,86.99], [1201129200000,89.85], [1201474800000,90.99], [1201561200000,91.64], [1201647600000,92.33], [1201734000000,91.75], [1202079600000,90.02], [1202166000000,88.41], [1202252400000,87.14], [1202338800000,88.11], [1202425200000,91.77], [1202770800000,92.78], [1202857200000,93.27], [1202943600000,95.46], [1203030000000,95.46], [1203289200000,101.74], [1203462000000,98.81], [1203894000000,100.88], [1204066800000,99.64], [1204153200000,102.59], [1204239600000,101.84], [1204498800000,99.52], [1204585200000,99.52], [1204671600000,104.52], [1204758000000,105.47], [1204844400000,105.15], [1205103600000,108.75], [1205276400000,109.92], [1205362800000,110.33], [1205449200000,110.21], [1205708400000,105.68], [1205967600000,101.84], [1206313200000,100.86], [1206399600000,101.22], [1206486000000,105.90], [1206572400000,107.58], [1206658800000,105.62], [1206914400000,101.58], [1207000800000,100.98], [1207173600000,103.83], [1207260000000,106.23], [1207605600000,108.50], [1207778400000,110.11], [1207864800000,110.14], [1208210400000,113.79], [1208296800000,114.93], [1208383200000,114.86], [1208728800000,117.48], [1208815200000,118.30], [1208988000000,116.06], [1209074400000,118.52], [1209333600000,118.75], [1209420000000,113.46], [1209592800000,112.52], [1210024800000,121.84], [1210111200000,123.53], [1210197600000,123.69], [1210543200000,124.23], [1210629600000,125.80], [1210716000000,126.29], [1211148000000,127.05], [1211320800000,129.07], [1211493600000,132.19], [1211839200000,128.85], [1212357600000,127.76], [1212703200000,138.54], [1212962400000,136.80], [1213135200000,136.38], [1213308000000,134.86], [1213653600000,134.01], [1213740000000,136.68], [1213912800000,135.65], [1214172000000,134.62], [1214258400000,134.62], [1214344800000,134.62], [1214431200000,139.64], [1214517600000,140.21], [1214776800000,140.00], [1214863200000,140.97], [1214949600000,143.57], [1215036000000,145.29], [1215381600000,141.37], [1215468000000,136.04], [1215727200000,146.40], [1215986400000,145.18], [1216072800000,138.74], [1216159200000,134.60], [1216245600000,129.29], [1216332000000,130.65], [1216677600000,127.95], [1216850400000,127.95], [1217282400000,122.19], [1217455200000,124.08], [1217541600000,125.10], [1217800800000,121.41], [1217887200000,119.17], [1217973600000,118.58], [1218060000000,120.02], [1218405600000,114.45], [1218492000000,113.01], [1218578400000,116.00], [1218751200000,113.77], [1219010400000,112.87], [1219096800000,114.53], [1219269600000,114.98], [1219356000000,114.98], [1219701600000,116.27], [1219788000000,118.15], [1219874400000,115.59], [1219960800000,115.46], [1220306400000,109.71], [1220392800000,109.35], [1220565600000,106.23], [1220824800000,106.34]];

                var exchangeRates = [[1167606000000,0.7580], [1167692400000,0.7580], [1167778800000,0.75470], [1167865200000,0.75490], [1167951600000,0.76130], [1168038000000,0.76550], [1168124400000,0.76930], [1168210800000,0.76940], [1168297200000,0.76880], [1168383600000,0.76780], [1168470000000,0.77080], [1168556400000,0.77270], [1168642800000,0.77490], [1168729200000,0.77410], [1168815600000,0.77410], [1168902000000,0.77320], [1168988400000,0.77270], [1169074800000,0.77370], [1169161200000,0.77240], [1169247600000,0.77120], [1169334000000,0.7720], [1169420400000,0.77210], [1169506800000,0.77170], [1169593200000,0.77040], [1169679600000,0.7690], [1169766000000,0.77110], [1169852400000,0.7740], [1169938800000,0.77450], [1170025200000,0.77450], [1170111600000,0.7740], [1170198000000,0.77160], [1170284400000,0.77130], [1170370800000,0.76780], [1170457200000,0.76880], [1170543600000,0.77180], [1170630000000,0.77180], [1170716400000,0.77280], [1170802800000,0.77290], [1170889200000,0.76980], [1170975600000,0.76850], [1171062000000,0.76810], [1171148400000,0.7690], [1171234800000,0.7690], [1171321200000,0.76980], [1171407600000,0.76990], [1171494000000,0.76510], [1171580400000,0.76130], [1171666800000,0.76160], [1171753200000,0.76140], [1171839600000,0.76140], [1171926000000,0.76070], [1172012400000,0.76020], [1172098800000,0.76110], [1172185200000,0.76220], [1172271600000,0.76150], [1172358000000,0.75980], [1172444400000,0.75980], [1172530800000,0.75920], [1172617200000,0.75730], [1172703600000,0.75660], [1172790000000,0.75670], [1172876400000,0.75910], [1172962800000,0.75820], [1173049200000,0.75850], [1173135600000,0.76130], [1173222000000,0.76310], [1173308400000,0.76150], [1173394800000,0.760], [1173481200000,0.76130], [1173567600000,0.76270], [1173654000000,0.76270], [1173740400000,0.76080], [1173826800000,0.75830], [1173913200000,0.75750], [1173999600000,0.75620], [1174086000000,0.7520], [1174172400000,0.75120], [1174258800000,0.75120], [1174345200000,0.75170], [1174431600000,0.7520], [1174518000000,0.75110], [1174604400000,0.7480], [1174690800000,0.75090], [1174777200000,0.75310], [1174860000000,0.75310], [1174946400000,0.75270], [1175032800000,0.74980], [1175119200000,0.74930], [1175205600000,0.75040], [1175292000000,0.750], [1175378400000,0.74910], [1175464800000,0.74910], [1175551200000,0.74850], [1175637600000,0.74840], [1175724000000,0.74920], [1175810400000,0.74710], [1175896800000,0.74590], [1175983200000,0.74770], [1176069600000,0.74770], [1176156000000,0.74830], [1176242400000,0.74580], [1176328800000,0.74480], [1176415200000,0.7430], [1176501600000,0.73990], [1176588000000,0.73950], [1176674400000,0.73950], [1176760800000,0.73780], [1176847200000,0.73820], [1176933600000,0.73620], [1177020000000,0.73550], [1177106400000,0.73480], [1177192800000,0.73610], [1177279200000,0.73610], [1177365600000,0.73650], [1177452000000,0.73620], [1177538400000,0.73310], [1177624800000,0.73390], [1177711200000,0.73440], [1177797600000,0.73270], [1177884000000,0.73270], [1177970400000,0.73360], [1178056800000,0.73330], [1178143200000,0.73590], [1178229600000,0.73590], [1178316000000,0.73720], [1178402400000,0.7360], [1178488800000,0.7360], [1178575200000,0.7350], [1178661600000,0.73650], [1178748000000,0.73840], [1178834400000,0.73950], [1178920800000,0.74130], [1179007200000,0.73970], [1179093600000,0.73960], [1179180000000,0.73850], [1179266400000,0.73780], [1179352800000,0.73660], [1179439200000,0.740], [1179525600000,0.74110], [1179612000000,0.74060], [1179698400000,0.74050], [1179784800000,0.74140], [1179871200000,0.74310], [1179957600000,0.74310], [1180044000000,0.74380], [1180130400000,0.74430], [1180216800000,0.74430], [1180303200000,0.74430], [1180389600000,0.74340], [1180476000000,0.74290], [1180562400000,0.74420], [1180648800000,0.7440], [1180735200000,0.74390], [1180821600000,0.74370], [1180908000000,0.74370], [1180994400000,0.74290], [1181080800000,0.74030], [1181167200000,0.73990], [1181253600000,0.74180], [1181340000000,0.74680], [1181426400000,0.7480], [1181512800000,0.7480], [1181599200000,0.7490], [1181685600000,0.74940], [1181772000000,0.75220], [1181858400000,0.75150], [1181944800000,0.75020], [1182031200000,0.74720], [1182117600000,0.74720], [1182204000000,0.74620], [1182290400000,0.74550], [1182376800000,0.74490], [1182463200000,0.74670], [1182549600000,0.74580], [1182636000000,0.74270], [1182722400000,0.74270], [1182808800000,0.7430], [1182895200000,0.74290], [1182981600000,0.7440], [1183068000000,0.7430], [1183154400000,0.74220], [1183240800000,0.73880], [1183327200000,0.73880], [1183413600000,0.73690], [1183500000000,0.73450], [1183586400000,0.73450], [1183672800000,0.73450], [1183759200000,0.73520], [1183845600000,0.73410], [1183932000000,0.73410], [1184018400000,0.7340], [1184104800000,0.73240], [1184191200000,0.72720], [1184277600000,0.72640], [1184364000000,0.72550], [1184450400000,0.72580], [1184536800000,0.72580], [1184623200000,0.72560], [1184709600000,0.72570], [1184796000000,0.72470], [1184882400000,0.72430], [1184968800000,0.72440], [1185055200000,0.72350], [1185141600000,0.72350], [1185228000000,0.72350], [1185314400000,0.72350], [1185400800000,0.72620], [1185487200000,0.72880], [1185573600000,0.73010], [1185660000000,0.73370], [1185746400000,0.73370], [1185832800000,0.73240], [1185919200000,0.72970], [1186005600000,0.73170], [1186092000000,0.73150], [1186178400000,0.72880], [1186264800000,0.72630], [1186351200000,0.72630], [1186437600000,0.72420], [1186524000000,0.72530], [1186610400000,0.72640], [1186696800000,0.7270], [1186783200000,0.73120], [1186869600000,0.73050], [1186956000000,0.73050], [1187042400000,0.73180], [1187128800000,0.73580], [1187215200000,0.74090], [1187301600000,0.74540], [1187388000000,0.74370], [1187474400000,0.74240], [1187560800000,0.74240], [1187647200000,0.74150], [1187733600000,0.74190], [1187820000000,0.74140], [1187906400000,0.73770], [1187992800000,0.73550], [1188079200000,0.73150], [1188165600000,0.73150], [1188252000000,0.7320], [1188338400000,0.73320], [1188424800000,0.73460], [1188511200000,0.73280], [1188597600000,0.73230], [1188684000000,0.7340], [1188770400000,0.7340], [1188856800000,0.73360], [1188943200000,0.73510], [1189029600000,0.73460], [1189116000000,0.73210], [1189202400000,0.72940], [1189288800000,0.72660], [1189375200000,0.72660], [1189461600000,0.72540], [1189548000000,0.72420], [1189634400000,0.72130], [1189720800000,0.71970], [1189807200000,0.72090], [1189893600000,0.7210], [1189980000000,0.7210], [1190066400000,0.7210], [1190152800000,0.72090], [1190239200000,0.71590], [1190325600000,0.71330], [1190412000000,0.71050], [1190498400000,0.70990], [1190584800000,0.70990], [1190671200000,0.70930], [1190757600000,0.70930], [1190844000000,0.70760], [1190930400000,0.7070], [1191016800000,0.70490], [1191103200000,0.70120], [1191189600000,0.70110], [1191276000000,0.70190], [1191362400000,0.70460], [1191448800000,0.70630], [1191535200000,0.70890], [1191621600000,0.70770], [1191708000000,0.70770], [1191794400000,0.70770], [1191880800000,0.70910], [1191967200000,0.71180], [1192053600000,0.70790], [1192140000000,0.70530], [1192226400000,0.7050], [1192312800000,0.70550], [1192399200000,0.70550], [1192485600000,0.70450], [1192572000000,0.70510], [1192658400000,0.70510], [1192744800000,0.70170], [1192831200000,0.70], [1192917600000,0.69950], [1193004000000,0.69940], [1193090400000,0.70140], [1193176800000,0.70360], [1193263200000,0.70210], [1193349600000,0.70020], [1193436000000,0.69670], [1193522400000,0.6950], [1193612400000,0.6950], [1193698800000,0.69390], [1193785200000,0.6940], [1193871600000,0.69220], [1193958000000,0.69190], [1194044400000,0.69140], [1194130800000,0.68940], [1194217200000,0.68910], [1194303600000,0.69040], [1194390000000,0.6890], [1194476400000,0.68340], [1194562800000,0.68230], [1194649200000,0.68070], [1194735600000,0.68150], [1194822000000,0.68150], [1194908400000,0.68470], [1194994800000,0.68590], [1195081200000,0.68220], [1195167600000,0.68270], [1195254000000,0.68370], [1195340400000,0.68230], [1195426800000,0.68220], [1195513200000,0.68220], [1195599600000,0.67920], [1195686000000,0.67460], [1195772400000,0.67350], [1195858800000,0.67310], [1195945200000,0.67420], [1196031600000,0.67440], [1196118000000,0.67390], [1196204400000,0.67310], [1196290800000,0.67610], [1196377200000,0.67610], [1196463600000,0.67850], [1196550000000,0.68180], [1196636400000,0.68360], [1196722800000,0.68230], [1196809200000,0.68050], [1196895600000,0.67930], [1196982000000,0.68490], [1197068400000,0.68330], [1197154800000,0.68250], [1197241200000,0.68250], [1197327600000,0.68160], [1197414000000,0.67990], [1197500400000,0.68130], [1197586800000,0.68090], [1197673200000,0.68680], [1197759600000,0.69330], [1197846000000,0.69330], [1197932400000,0.69450], [1198018800000,0.69440], [1198105200000,0.69460], [1198191600000,0.69640], [1198278000000,0.69650], [1198364400000,0.69560], [1198450800000,0.69560], [1198537200000,0.6950], [1198623600000,0.69480], [1198710000000,0.69280], [1198796400000,0.68870], [1198882800000,0.68240], [1198969200000,0.67940], [1199055600000,0.67940], [1199142000000,0.68030], [1199228400000,0.68550], [1199314800000,0.68240], [1199401200000,0.67910], [1199487600000,0.67830], [1199574000000,0.67850], [1199660400000,0.67850], [1199746800000,0.67970], [1199833200000,0.680], [1199919600000,0.68030], [1200006000000,0.68050], [1200092400000,0.6760], [1200178800000,0.6770], [1200265200000,0.6770], [1200351600000,0.67360], [1200438000000,0.67260], [1200524400000,0.67640], [1200610800000,0.68210], [1200697200000,0.68310], [1200783600000,0.68420], [1200870000000,0.68420], [1200956400000,0.68870], [1201042800000,0.69030], [1201129200000,0.68480], [1201215600000,0.68240], [1201302000000,0.67880], [1201388400000,0.68140], [1201474800000,0.68140], [1201561200000,0.67970], [1201647600000,0.67690], [1201734000000,0.67650], [1201820400000,0.67330], [1201906800000,0.67290], [1201993200000,0.67580], [1202079600000,0.67580], [1202166000000,0.6750], [1202252400000,0.6780], [1202338800000,0.68330], [1202425200000,0.68560], [1202511600000,0.69030], [1202598000000,0.68960], [1202684400000,0.68960], [1202770800000,0.68820], [1202857200000,0.68790], [1202943600000,0.68620], [1203030000000,0.68520], [1203116400000,0.68230], [1203202800000,0.68130], [1203289200000,0.68130], [1203375600000,0.68220], [1203462000000,0.68020], [1203548400000,0.68020], [1203634800000,0.67840], [1203721200000,0.67480], [1203807600000,0.67470], [1203894000000,0.67470], [1203980400000,0.67480], [1204066800000,0.67330], [1204153200000,0.6650], [1204239600000,0.66110], [1204326000000,0.65830], [1204412400000,0.6590], [1204498800000,0.6590], [1204585200000,0.65810], [1204671600000,0.65780], [1204758000000,0.65740], [1204844400000,0.65320], [1204930800000,0.65020], [1205017200000,0.65140], [1205103600000,0.65140], [1205190000000,0.65070], [1205276400000,0.6510], [1205362800000,0.64890], [1205449200000,0.64240], [1205535600000,0.64060], [1205622000000,0.63820], [1205708400000,0.63820], [1205794800000,0.63410], [1205881200000,0.63440], [1205967600000,0.63780], [1206054000000,0.64390], [1206140400000,0.64780], [1206226800000,0.64810], [1206313200000,0.64810], [1206399600000,0.64940], [1206486000000,0.64380], [1206572400000,0.63770], [1206658800000,0.63290], [1206745200000,0.63360], [1206831600000,0.63330], [1206914400000,0.63330], [1207000800000,0.6330], [1207087200000,0.63710], [1207173600000,0.64030], [1207260000000,0.63960], [1207346400000,0.63640], [1207432800000,0.63560], [1207519200000,0.63560], [1207605600000,0.63680], [1207692000000,0.63570], [1207778400000,0.63540], [1207864800000,0.6320], [1207951200000,0.63320], [1208037600000,0.63280], [1208124000000,0.63310], [1208210400000,0.63420], [1208296800000,0.63210], [1208383200000,0.63020], [1208469600000,0.62780], [1208556000000,0.63080], [1208642400000,0.63240], [1208728800000,0.63240], [1208815200000,0.63070], [1208901600000,0.62770], [1208988000000,0.62690], [1209074400000,0.63350], [1209160800000,0.63920], [1209247200000,0.640], [1209333600000,0.64010], [1209420000000,0.63960], [1209506400000,0.64070], [1209592800000,0.64230], [1209679200000,0.64290], [1209765600000,0.64720], [1209852000000,0.64850], [1209938400000,0.64860], [1210024800000,0.64670], [1210111200000,0.64440], [1210197600000,0.64670], [1210284000000,0.65090], [1210370400000,0.64780], [1210456800000,0.64610], [1210543200000,0.64610], [1210629600000,0.64680], [1210716000000,0.64490], [1210802400000,0.6470], [1210888800000,0.64610], [1210975200000,0.64520], [1211061600000,0.64220], [1211148000000,0.64220], [1211234400000,0.64250], [1211320800000,0.64140], [1211407200000,0.63660], [1211493600000,0.63460], [1211580000000,0.6350], [1211666400000,0.63460], [1211752800000,0.63460], [1211839200000,0.63430], [1211925600000,0.63460], [1212012000000,0.63790], [1212098400000,0.64160], [1212184800000,0.64420], [1212271200000,0.64310], [1212357600000,0.64310], [1212444000000,0.64350], [1212530400000,0.6440], [1212616800000,0.64730], [1212703200000,0.64690], [1212789600000,0.63860], [1212876000000,0.63560], [1212962400000,0.6340], [1213048800000,0.63460], [1213135200000,0.6430], [1213221600000,0.64520], [1213308000000,0.64670], [1213394400000,0.65060], [1213480800000,0.65040], [1213567200000,0.65030], [1213653600000,0.64810], [1213740000000,0.64510], [1213826400000,0.6450], [1213912800000,0.64410], [1213999200000,0.64140], [1214085600000,0.64090], [1214172000000,0.64090], [1214258400000,0.64280], [1214344800000,0.64310], [1214431200000,0.64180], [1214517600000,0.63710], [1214604000000,0.63490], [1214690400000,0.63330], [1214776800000,0.63340], [1214863200000,0.63380], [1214949600000,0.63420], [1215036000000,0.6320], [1215122400000,0.63180], [1215208800000,0.6370], [1215295200000,0.63680], [1215381600000,0.63680], [1215468000000,0.63830], [1215554400000,0.63710], [1215640800000,0.63710], [1215727200000,0.63550], [1215813600000,0.6320], [1215900000000,0.62770], [1215986400000,0.62760], [1216072800000,0.62910], [1216159200000,0.62740], [1216245600000,0.62930], [1216332000000,0.63110], [1216418400000,0.6310], [1216504800000,0.63120], [1216591200000,0.63120], [1216677600000,0.63040], [1216764000000,0.62940], [1216850400000,0.63480], [1216936800000,0.63780], [1217023200000,0.63680], [1217109600000,0.63680], [1217196000000,0.63680], [1217282400000,0.6360], [1217368800000,0.6370], [1217455200000,0.64180], [1217541600000,0.64110], [1217628000000,0.64350], [1217714400000,0.64270], [1217800800000,0.64270], [1217887200000,0.64190], [1217973600000,0.64460], [1218060000000,0.64680], [1218146400000,0.64870], [1218232800000,0.65940], [1218319200000,0.66660], [1218405600000,0.66660], [1218492000000,0.66780], [1218578400000,0.67120], [1218664800000,0.67050], [1218751200000,0.67180], [1218837600000,0.67840], [1218924000000,0.68110], [1219010400000,0.68110], [1219096800000,0.67940], [1219183200000,0.68040], [1219269600000,0.67810], [1219356000000,0.67560], [1219442400000,0.67350], [1219528800000,0.67630], [1219615200000,0.67620], [1219701600000,0.67770], [1219788000000,0.68150], [1219874400000,0.68020], [1219960800000,0.6780], [1220047200000,0.67960], [1220133600000,0.68170], [1220220000000,0.68170], [1220306400000,0.68320], [1220392800000,0.68770], [1220479200000,0.69120], [1220565600000,0.69140], [1220652000000,0.70090], [1220738400000,0.70120], [1220824800000,0.7010], [1220911200000,0.70050]];

                var data = [
                    { data: oilPrices, label: "Oil price ($)" },
                    { data: exchangeRates, label: "USD/EUR exchange rate", yaxis: 2 }
                ];

                var options = {
                    canvas: true,
                    xaxes: [ { mode: "time" } ],
                    yaxes: [ { min: 0 }, {
                        position: "right",
                        alignTicksWithAxis: 1,
                        tickFormatter: function(value, axis) {
                            return value.toFixed(axis.tickDecimals) + "€";
                        }
                    } ],
                    legend: { position: "sw" }
                }

                $.plot("#canvas", data, options);

                // Bart Chart
                var barOptions = {
                    series: {
                        bars: {
                            show: true,
                            barWidth: 43200000
                        }
                    },
                    xaxis: {
                        mode: "time",
                        timeformat: "%m/%d",
                        minTickSize: [2, "day"]
                    },
                    grid: {
                        color: "#AFAFAF",
                        hoverable: true,
                        borderWidth: 0,
                        backgroundColor: '#FFF'
                    },
                    legend: {
                        show: false
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: "x: %x, y: %y"
                    }
                };
                var barData = {
                    label: "bar",
                    color: "#fb9678",
                    data: [
                        [1354521600000, 1000],
                        [1355040000000, 2000],
                        [1355223600000, 3000],
                        [1355306400000, 4000],
                        [1355487300000, 5000],
                        [1355571900000, 6000]
                    ]
                };
                $.plot($("#barchart"), [barData], barOptions);

                // Real Time bar
                var data = [],
                    totalPoints = 300;

                function getRandomData() {

                    if (data.length > 0)
                        data = data.slice(1);

                    // Do a random walk

                    while (data.length < totalPoints) {

                        var prev = data.length > 0 ? data[data.length - 1] : 50,
                            y = prev + Math.random() * 10 - 5;

                        if (y < 0) {
                            y = 0;
                        } else if (y > 100) {
                            y = 100;
                        }

                        data.push(y);
                    }

                    // Zip the generated y values with the x values

                    var res = [];
                    for (var i = 0; i < data.length; ++i) {
                        res.push([i, data[i]])
                    }

                    return res;
                }

                // Set up the control widget

                var updateInterval = 30;
                $("#updateInterval").val(updateInterval).change(function () {
                    var v = $(this).val();
                    if (v && !isNaN(+v)) {
                        updateInterval = +v;
                        if (updateInterval < 1) {
                            updateInterval = 1;
                        } else if (updateInterval > 2000) {
                            updateInterval = 2000;
                        }
                        $(this).val("" + updateInterval);
                    }
                });

                var plot = $.plot("#realtime", [ getRandomData() ], {
                    series: {
                        shadowSize: 0	// Drawing is faster without shadows
                    },
                    yaxis: {
                        min: 0,
                        max: 100
                    },
                    xaxis: {
                        show: false
                    }
                });

                function update() {

                    plot.setData([getRandomData()]);

                    // Since the axes don't change, we don't need to call plot.setupGrid()

                    plot.draw();
                    setTimeout(update, updateInterval);
                }

                update();

// Stacked Chart
                var d1 = [];
                for (var i = 0; i <= 10; i += 1) {
                    d1.push([i, parseInt(Math.random() * 30)]);
                }

                var d2 = [];
                for (var i = 0; i <= 10; i += 1) {
                    d2.push([i, parseInt(Math.random() * 30)]);
                }

                var d3 = [];
                for (var i = 0; i <= 10; i += 1) {
                    d3.push([i, parseInt(Math.random() * 30)]);
                }

                var stack = 0,
                    bars = true,
                    lines = false,
                    steps = false;

                function plotWithOptions() {
                    $.plot("#stacked", [ d1, d2, d3 ], {
                        series: {
                            stack: stack,
                            lines: {
                                show: lines,
                                fill: true,
                                steps: steps
                            },
                            bars: {
                                show: bars,
                                barWidth: 0.6
                            }
                        }
                    });
                }

                plotWithOptions();

//Crosshair Chart
                var a = '##03a9f4',
                    b = ($("#crosshair"), [
                        [1, 10],
                        [2, 30],
                        [3, 55],
                        [4, 36],
                        [5, 57],
                        [6, 80],
                        [7, 65],
                        [8, 50],
                        [9, 80],
                        [10, 70],
                        [11, 90],
                        [12, 67],
                        [12, 67]
                    ]);
                $.plot("#crosshair", [{
                    data: b,
                    showLabels: !0,
                    label: "New Visitors",
                    labelPlacement: "below",
                    canvasRender: !0,
                    cColor: "#FFFFFF"
                }], {
                    series: {
                        lines: {
                            show: !0,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: {
                                colors: [{
                                    opacity: .35
                                }, {
                                    opacity: .35
                                }]
                            }
                        },
                        fillColor: "rgba(0, 0, 0, 1)",
                        points: {
                            show: !0,
                            fill: !0,
                            fillColor: a
                        },
                        shadowSize: 0
                    },
                    legend: {
                        show: !1
                    },
                    grid: {
                        show: !1,
                        margin: {
                            left: -8,
                            right: -8,
                            top: 0,
                            botttom: 0
                        },
                        labelMargin: 0,
                        axisMargin: 0,
                        hoverable: !0,
                        clickable: !0,
                        tickColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0
                    },
                    colors: [a],
                    xaxis: {
                        autoscaleMargin: 0,
                        ticks: 11,
                        tickDecimals: 0
                    },
                    yaxis: {
                        autoscaleMargin: .5,
                        ticks: 5,
                        tickDecimals: 0
                    }
                })


            });



        }(window.jQuery);
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);




app.controller("FormBasicController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        !function($) {
            "use strict";
            $(function(){



                var chart = c3.generate({
                    bindto: '#demo1',
                    data: {
                        columns: [
                            ['data1', 30, 20, 50, 40, 60, 50],
                            ['data2', 200, 130, 90, 240, 130, 220],
                            ['data3', 300, 200, 160, 400, 250, 250]
                        ]
                    }
                });



                var chart = c3.generate({
                    bindto: '#columnchart_material',
                    data: {
                        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                        columns: [
                            ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                            ['data1', 30, 200, 100, 400, 150, 250],
                            ['data2', 130, 340, 200, 500, 250, 350]
                        ]
                    },
                    axis: {
                        x: {
                            type: 'timeseries',
                            tick: {
                                format: '%Y-%m-%d'
                            }
                        }
                    }
                });

                setTimeout(function () {
                    chart.load({
                        columns: [
                            ['data3', 400, 500, 450, 700, 600, 500]
                        ]
                    });
                }, 1000);


                var chart = c3.generate({
                    bindto: '#spline',
                    data: {
                        columns: [
                            ['data1', 30, 200, 100, 400, 150, 250],
                            ['data2', 130, 100, 140, 200, 150, 50]
                        ],
                        type: 'spline'
                    }
                });

                var chart = c3.generate({
                    bindto: '#donut',
                    data: {
                        columns: [
                            ['data1', 30],
                            ['data2', 120],
                        ],
                        type : 'donut',
                        onclick: function (d, i) { console.log("onclick", d, i); },
                        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                    },
                    donut: {
                        title: "Iris Petal Width"
                    }
                });

                var chart = c3.generate({
                    bindto: '#combination',
                    data: {
                        columns: [
                            ['data1', 30, 20, 50, 40, 60, 50],
                            ['data2', 200, 130, 90, 240, 130, 220],
                            ['data3', 300, 200, 160, 400, 250, 250],
                            ['data4', 200, 130, 90, 240, 130, 220],
                            ['data5', 130, 120, 150, 140, 160, 150],
                            ['data6', 90, 70, 20, 50, 60, 120],
                        ],
                        type: 'bar',
                        types: {
                            data3: 'spline',
                            data4: 'line',
                            data6: 'area'
                        },
                        groups: [
                            ['data1','data2']
                        ]
                    }
                });

            });



        }(window.jQuery);
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);

app.controller("FormAdvancedController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;


        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);


app.controller("FileUploadController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
// Upload Demo
// -----------------------------------
// Upload Demo
// -----------------------------------

        (function(window, document, $, undefined){

            $(function () {
                'use strict';

                // Initialize the jQuery File Upload widget:
                $('#fileupload').fileupload({
                    // Uncomment the following to send cross-domain cookies:
                    //xhrFields: {withCredentials: true},
                    // url: 'server/upload'
                });

                // Enable iframe cross-domain access via redirect option:
                $('#fileupload').fileupload(
                    'option',
                    'redirect',
                    window.location.href.replace(
                        /\/[^\/]*$/,
                        '/cors/result.html?%s'
                    )
                );

                // Load existing files:
                $('#fileupload').addClass('fileupload-processing');
                $.ajax({
                    // Uncomment the following to send cross-domain cookies:
                    //xhrFields: {withCredentials: true},
                    url: $('#fileupload').fileupload('option', 'url'),
                    dataType: 'json',
                    context: $('#fileupload')[0]
                }).always(function () {
                    $(this).removeClass('fileupload-processing');
                }).done(function (result) {
                    $(this).fileupload('option', 'done')
                        .call(this, $.Event('done'), {result: result});
                });

            });

        })(window, document, window.jQuery);
    }]);


app.controller("FormInlineEditController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        // Xeditable Demo
// -----------------------------------

        // Xeditable Demo
// -----------------------------------
        !function($) {
            "use strict";
            (function(window, document, $, undefined){

                $(function(){

                    // Font Awesome support
                    $.fn.editableform.buttons =
                        '<button type="submit" class="btn btn-primary btn-sm editable-submit">'+
                        '<i class="fa fa-fw fa-check"></i>'+
                        '</button>'+
                        '<button type="button" class="btn btn-default btn-sm editable-cancel">'+
                        '<i class="fa fa-fw fa-times"></i>'+
                        '</button>';

                    //defaults
//       $.fn.editable.defaults.url = '../server/xeditable.res';

                    //enable / disable
                    $('#enable').click(function() {
                        $('#user .editable').editable('toggleDisabled');
                    });

                    //editables
                    $('#username').editable({
//               url: '../server/xeditable.res',
                        type: 'text',
                        pk: 1,
                        name: 'username',
                        title: 'Enter username'
                    });

                    $('#firstname').editable({
                        validate: function(value) {
                            if($.trim(value) === '') return 'This field is required';
                        }
                    });

                    $('#sex').editable({
                        prepend: "not selected",
                        source: [
                            {value: 1, text: 'Male'},
                            {value: 2, text: 'Female'}
                        ],
                        display: function(value, sourceData) {
                            var colors = {"": "gray", 1: "green", 2: "blue"},
                                elem = $.grep(sourceData, function(o){return o.value == value;});

                            if(elem.length) {
                                $(this).text(elem[0].text).css("color", colors[value]);
                            } else {
                                $(this).empty();
                            }
                        }
                    });

                    $('#status').editable();

                    $('#group').editable({
                        showbuttons: false
                    });

                    $('#dob').editable();

                    $('#event').editable({
                        placement: 'right',
                        combodate: {
                            firstItem: 'name'
                        }
                    });

                    $('#comments').editable({
                        showbuttons: 'bottom'
                    });

                    $('#note').editable();
                    $('#pencil').click(function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        $('#note').editable('toggle');
                    });

                    $('#fruits').editable({
                        pk: 1,
                        limit: 3,
                        source: [
                            {value: 1, text: 'banana'},
                            {value: 2, text: 'peach'},
                            {value: 3, text: 'apple'},
                            {value: 4, text: 'watermelon'},
                            {value: 5, text: 'orange'}
                        ]
                    });

                    $('#user .editable').on('hidden', function(e, reason){
                        if(reason === 'save' || reason === 'nochange') {
                            var $next = $(this).closest('tr').next().find('.editable');
                            if($('#autoopen').is(':checked')) {
                                setTimeout(function() {
                                    $next.editable('show');
                                }, 300);
                            } else {
                                $next.focus();
                            }
                        }
                    });

                    // TABLE
                    // -----------------------------------

                    $('#users a').editable({
                        type: 'text',
                        name: 'username',
                        title: 'Enter username'
                    });

                });

            })(window, document, window.jQuery);

        }(window.jQuery);


    }]);


app.controller("FormMaskedController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        !function($) {
            "use strict";

            //------------- Fancy select -------------//
            $('.fancy-select').fancySelect();
            //custom templating
            $('.fancy-select1').fancySelect({
                optionTemplate: function (optionEl) {
                    return optionEl.text() + '<i class="pull-left ' + optionEl.data('icon') + '"></i>';
                }
            });

            //------------- Select 2 -------------//
            $('.select2').select2({placeholder: 'Select state'});

            //minumum 2 symbols input
            $('.select2-minimum').select2({
                placeholder: 'Select state',
                minimumInputLength: 2
            });

            // BOOTSTRAP SLIDER CTRL
            $('[data-ui-slider]').slider();
            // MASKED
            $('[data-masked]').inputmask();

        }(window.jQuery);

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);


app.controller("FormTextEditorController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

        !function($) {
            "use strict";

            $('.summernote').summernote();
            var edit = function () {
                $('.click2edit').summernote({focus: true});
            };
            var save = function () {
                var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
                $('.click2edit').destroy();
            };
        }(window.jQuery);
    }]);



app.controller("FormValidateController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        /* ========================================================================
         * Bootstrap (plugin): validator.js v0.9.0
         * ========================================================================
         * The MIT License (MIT)
         *
         * Copyright (c) 2015 Cina Saffary.
         * Made by @1000hz in the style of Bootstrap 3 era @fat
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         * ======================================================================== */


        +function ($) {
            'use strict';

            // VALIDATOR CLASS DEFINITION
            // ==========================

            var Validator = function (element, options) {
                this.$element = $(element)
                this.options  = options

                options.errors = $.extend({}, Validator.DEFAULTS.errors, options.errors)

                for (var custom in options.custom) {
                    if (!options.errors[custom]) throw new Error('Missing default error message for custom validator: ' + custom)
                }

                $.extend(Validator.VALIDATORS, options.custom)

                this.$element.attr('novalidate', true) // disable automatic native validation
                this.toggleSubmit()

                this.$element.on('input.bs.validator change.bs.validator focusout.bs.validator', $.proxy(this.validateInput, this))
                this.$element.on('submit.bs.validator', $.proxy(this.onSubmit, this))

                this.$element.find('[data-match]').each(function () {
                    var $this  = $(this)
                    var target = $this.data('match')

                    $(target).on('input.bs.validator', function (e) {
                        $this.val() && $this.trigger('input.bs.validator')
                    })
                })
            }

            Validator.INPUT_SELECTOR = ':input:not([type="submit"], button):enabled:visible'

            Validator.DEFAULTS = {
                delay: 500,
                html: false,
                disable: true,
                custom: {},
                errors: {
                    match: 'Does not match',
                    minlength: 'Not long enough'
                },
                feedback: {
                    success: 'glyphicon-ok',
                    error: 'glyphicon-remove'
                }
            }

            Validator.VALIDATORS = {
                'native': function ($el) {
                    var el = $el[0]
                    return el.checkValidity ? el.checkValidity() : true
                },
                'match': function ($el) {
                    var target = $el.data('match')
                    return !$el.val() || $el.val() === $(target).val()
                },
                'minlength': function ($el) {
                    var minlength = $el.data('minlength')
                    return !$el.val() || $el.val().length >= minlength
                }
            }

            Validator.prototype.validateInput = function (e) {
                var $el        = $(e.target)
                var prevErrors = $el.data('bs.validator.errors')
                var errors

                if ($el.is('[type="radio"]')) $el = this.$element.find('input[name="' + $el.attr('name') + '"]')

                this.$element.trigger(e = $.Event('validate.bs.validator', {relatedTarget: $el[0]}))

                if (e.isDefaultPrevented()) return

                var self = this

                this.runValidators($el).done(function (errors) {
                    $el.data('bs.validator.errors', errors)

                    errors.length ? self.showErrors($el) : self.clearErrors($el)

                    if (!prevErrors || errors.toString() !== prevErrors.toString()) {
                        e = errors.length
                            ? $.Event('invalid.bs.validator', {relatedTarget: $el[0], detail: errors})
                            : $.Event('valid.bs.validator', {relatedTarget: $el[0], detail: prevErrors})

                        self.$element.trigger(e)
                    }

                    self.toggleSubmit()

                    self.$element.trigger($.Event('validated.bs.validator', {relatedTarget: $el[0]}))
                })
            }


            Validator.prototype.runValidators = function ($el) {
                var errors   = []
                var deferred = $.Deferred()
                var options  = this.options

                $el.data('bs.validator.deferred') && $el.data('bs.validator.deferred').reject()
                $el.data('bs.validator.deferred', deferred)

                function getErrorMessage(key) {
                    return $el.data(key + '-error')
                        || $el.data('error')
                        || key == 'native' && $el[0].validationMessage
                        || options.errors[key]
                }

                $.each(Validator.VALIDATORS, $.proxy(function (key, validator) {
                    if (($el.data(key) || key == 'native') && !validator.call(this, $el)) {
                        var error = getErrorMessage(key)
                        !~errors.indexOf(error) && errors.push(error)
                    }
                }, this))

                if (!errors.length && $el.val() && $el.data('remote')) {
                    this.defer($el, function () {
                        var data = {}
                        data[$el.attr('name')] = $el.val()
                        $.get($el.data('remote'), data)
                            .fail(function (jqXHR, textStatus, error) { errors.push(getErrorMessage('remote') || error) })
                            .always(function () { deferred.resolve(errors)})
                    })
                } else deferred.resolve(errors)

                return deferred.promise()
            }

            Validator.prototype.validate = function () {
                var delay = this.options.delay

                this.options.delay = 0
                this.$element.find(Validator.INPUT_SELECTOR).trigger('input.bs.validator')
                this.options.delay = delay

                return this
            }

            Validator.prototype.showErrors = function ($el) {
                var method = this.options.html ? 'html' : 'text'

                this.defer($el, function () {
                    var $group = $el.closest('.form-group')
                    var $block = $group.find('.help-block.with-errors')
                    var $feedback = $group.find('.form-control-feedback')
                    var errors = $el.data('bs.validator.errors')

                    if (!errors.length) return

                    errors = $('<ul/>')
                        .addClass('list-unstyled')
                        .append($.map(errors, function (error) { return $('<li/>')[method](error) }))

                    $block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html())
                    $block.empty().append(errors)
                    $group.addClass('has-error')

                    $feedback.length
                    && $feedback.removeClass(this.options.feedback.success)
                    && $feedback.addClass(this.options.feedback.error)
                    && $group.removeClass('has-success')
                })
            }

            Validator.prototype.clearErrors = function ($el) {
                var $group = $el.closest('.form-group')
                var $block = $group.find('.help-block.with-errors')
                var $feedback = $group.find('.form-control-feedback')

                $block.html($block.data('bs.validator.originalContent'))
                $group.removeClass('has-error')

                $feedback.length
                && $feedback.removeClass(this.options.feedback.error)
                && $feedback.addClass(this.options.feedback.success)
                && $group.addClass('has-success')
            }

            Validator.prototype.hasErrors = function () {
                function fieldErrors() {
                    return !!($(this).data('bs.validator.errors') || []).length
                }

                return !!this.$element.find(Validator.INPUT_SELECTOR).filter(fieldErrors).length
            }

            Validator.prototype.isIncomplete = function () {
                function fieldIncomplete() {
                    return this.type === 'checkbox' ? !this.checked                                   :
                        this.type === 'radio'    ? !$('[name="' + this.name + '"]:checked').length :
                        $.trim(this.value) === ''
                }

                return !!this.$element.find(Validator.INPUT_SELECTOR).filter('[required]').filter(fieldIncomplete).length
            }

            Validator.prototype.onSubmit = function (e) {
                this.validate()
                if (this.isIncomplete() || this.hasErrors()) e.preventDefault()
            }

            Validator.prototype.toggleSubmit = function () {
                if(!this.options.disable) return

                var $btn = $('button[type="submit"], input[type="submit"]')
                    .filter('[form="' + this.$element.attr('id') + '"]')
                    .add(this.$element.find('input[type="submit"], button[type="submit"]'))

                $btn.toggleClass('disabled', this.isIncomplete() || this.hasErrors())
            }

            Validator.prototype.defer = function ($el, callback) {
                callback = $.proxy(callback, this)
                if (!this.options.delay) return callback()
                window.clearTimeout($el.data('bs.validator.timeout'))
                $el.data('bs.validator.timeout', window.setTimeout(callback, this.options.delay))
            }

            Validator.prototype.destroy = function () {
                this.$element
                    .removeAttr('novalidate')
                    .removeData('bs.validator')
                    .off('.bs.validator')

                this.$element.find(Validator.INPUT_SELECTOR)
                    .off('.bs.validator')
                    .removeData(['bs.validator.errors', 'bs.validator.deferred'])
                    .each(function () {
                        var $this = $(this)
                        var timeout = $this.data('bs.validator.timeout')
                        window.clearTimeout(timeout) && $this.removeData('bs.validator.timeout')
                    })

                this.$element.find('.help-block.with-errors').each(function () {
                    var $this = $(this)
                    var originalContent = $this.data('bs.validator.originalContent')

                    $this
                        .removeData('bs.validator.originalContent')
                        .html(originalContent)
                })

                this.$element.find('input[type="submit"], button[type="submit"]').removeClass('disabled')

                this.$element.find('.has-error').removeClass('has-error')

                return this
            }

            // VALIDATOR PLUGIN DEFINITION
            // ===========================


            function Plugin(option) {
                return this.each(function () {
                    var $this   = $(this)
                    var options = $.extend({}, Validator.DEFAULTS, $this.data(), typeof option == 'object' && option)
                    var data    = $this.data('bs.validator')

                    if (!data && option == 'destroy') return
                    if (!data) $this.data('bs.validator', (data = new Validator(this, options)))
                    if (typeof option == 'string') data[option]()
                })
            }

            var old = $.fn.validator

            $.fn.validator             = Plugin
            $.fn.validator.Constructor = Validator


            // VALIDATOR NO CONFLICT
            // =====================

            $.fn.validator.noConflict = function () {
                $.fn.validator = old
                return this
            }


            // VALIDATOR DATA-API
            // ==================

            $(window).on('load', function () {
                $('form[data-toggle="validator"]').each(function () {
                    var $form = $(this)
                    Plugin.call($form, $form.data())
                })
            })

        }(jQuery);



        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);

app.controller("FormTinymceEditController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        !function($) {
            "use strict";
            tinymce.init({
                selector: 'textarea',
                height: 500,
                theme: 'modern',
                plugins: [
                    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen',
                    'insertdatetime media nonbreaking save table contextmenu directionality',
                    'emoticons template paste textcolor colorpicker textpattern imagetools'
                ],
                toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                toolbar2: 'print preview media | forecolor backcolor emoticons',
                image_advtab: true,
                templates: [
                    { title: 'Test template 1', content: 'Test 1' },
                    { title: 'Test template 2', content: 'Test 2' }
                ],
                content_css: [
                    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                    '//www.tinymce.com/css/codepen.min.css'
                ]
            });
        }(window.jQuery);
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);



app.controller("FormwysihtmlController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        !function ($) {
            "use strict";
            var editor = new wysihtml5.Editor("wysihtml5-editor", {
                toolbar: "wysihtml5-editor-toolbar",
                stylesheets: ["http://yui.yahooapis.com/2.9.0/build/reset/reset-min.css", "assets/css/editor.css"]
            });

            editor.on("load", function () {
                var composer = editor.composer;
                composer.selection.selectNode(editor.composer.element.querySelector("h1"));
            });
        }(window.jQuery);



        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);

app.controller("FormWizardController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

        //------------- forms-wizard.js -------------//
        //------------- forms-wizard.js -------------//
        !function($) {
            "use strict";



            //------------- Form wizard -------------//

            //add validation to wizard
            var $validator = $("#wizard form").validate({
                errorPlacement: function( error, element ) {
                    var place = element.closest('.input-group');
                    if (!place.get(0)) {
                        place = element;
                    }
                    if (place.get(0).type === 'checkbox') {
                        place = element.parent();
                    }
                    if (error.text() !== '') {
                        place.after(error);
                    }
                },
                errorClass: 'help-block',
                rules: {
                    firstname: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    username: {
                        required: true
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    password_2: {
                        required: true,
                        minlength: 5,
                        equalTo: "#password"
                    }
                },
                messages: {
                    firstname: {
                        required: "Required"
                    },
                    email: {
                        required: "Required"
                    }
                },
                highlight: function( label ) {
                    $(label).closest('.form-group').removeClass('has-success').addClass('has-error');
                },
                success: function( label ) {
                    $(label).closest('.form-group').removeClass('has-error');
                    label.remove();
                }
            });

            //init first wizard
            $('#wizard').bootstrapWizard({
                tabClass: 'bwizard-steps',
                nextSelector: 'ul.pager li.next',
                previousSelector: 'ul.pager li.previous',
                firstSelector: null,
                lastSelector: null,
                onNext: function( tab, navigation, index, newindex ) {
                    var validated = $('#wizard form').valid();
                    if( !validated ) {
                        $validator.focusInvalid();
                        return false;
                    }
                },
                onTabClick: function( tab, navigation, index, newindex ) {
                    if ( newindex == index + 1 ) {
                        return this.onNext( tab, navigation, index, newindex);
                    } else if ( newindex > index + 1 ) {
                        return false;
                    } else {
                        return true;
                    }
                },
                onTabShow: function( tab, navigation, index ) {
                    tab.prevAll().addClass('completed');
                    tab.nextAll().removeClass('completed');
                    var $total = navigation.find('li').length;
                    var $current = index+1;
                    // If it's the last tab then hide the last button and show the finish instead
                    if($current >= $total) {
                        $('#wizard').find('.pager .next').hide();
                        $('#wizard').find('.pager .finish').show();
                        $('#wizard').find('.pager .finish').removeClass('disabled');
                    } else {
                        $('#wizard').find('.pager .next').show();
                        $('#wizard').find('.pager .finish').hide();
                    }
                }
            });

            //wizard is finish
            $('#wizard .finish').click(function() {
                //show message
            });

            //------------- Wizard with progressbar -------------//
            //init first wizard
            $('#wizard1').bootstrapWizard({
                tabClass: 'bwizard-steps',
                nextSelector: 'ul.pager li.next',
                previousSelector: 'ul.pager li.previous',
                firstSelector: null,
                lastSelector: null,
                onTabShow: function( tab, navigation, index ) {
                    tab.prevAll().addClass('completed');
                    tab.nextAll().removeClass('completed');
                    var $total = navigation.find('li').length;
                    var $current = index+1;
                    var $percent = ($current/$total) * 100;
                    $('#wizard1').find('.progress-bar').css({width:$percent+'%'});
                    // If it's the last tab then hide the last button and show the finish instead
                    if($current >= $total) {
                        $('#wizard1').find('.pager .next').hide();
                        $('#wizard1').find('.pager .finish').show();
                        $('#wizard1').find('.pager .finish').removeClass('disabled');
                    } else {
                        $('#wizard1').find('.pager .next').show();
                        $('#wizard1').find('.pager .finish').hide();
                    }
                }
            });

            //wizard is finish
            $('#wizard1 .finish').click(function() {
                //show message
            });

        }(window.jQuery);

    }]);



app.controller("GalleryController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        !function($) {
            "use strict";
            $(function(){
                $('.show-image').magnificPopup({type: 'image'});
            });
        }(window.jQuery);
    }]);



app.controller("GridOptionsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("IconsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("LineaArrowsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("LineaBasicController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("LineaEcommerceController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("LineaElaborationController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("LockscreenController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $(function () {

        });
    }]);



app.controller("LoginController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

    }]);



app.controller("MailComposeController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        jQuery(document).ready(function () {
            // HTML5 WYSIWYG Editor
            jQuery('#wysiwyg').wysihtml5({color: true, html: true});
        });
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("ModelsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("MorrisController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        !function($) {
            "use strict";
            $(function(){

                //Bar charts
                Morris.Bar({
                    element: 'morris-bar',
                    data: [
                        {x: '2011 Q1', y: 3, z: 2, a: 3},
                        {x: '2011 Q2', y: 2, z: null, a: 1},
                        {x: '2011 Q3', y: 0, z: 2, a: 4},
                        {x: '2011 Q4', y: 2, z: 4, a: 3}
                    ],
                    xkey: 'x',
                    ykeys: ['y', 'z', 'a'],
                    labels: ['Y', 'Z', 'A']
                }).on('click', function(i, row){
                    console.log(i, row);
                });

/// Morris Line chart
                Morris.Area({
                    element: 'morris-area-chart',
                    data: [{
                        period: '2010',
                        iphone: 50,
                        ipad: 80,
                        itouch: 20
                    }, {
                        period: '2011',
                        iphone: 130,
                        ipad: 100,
                        itouch: 80
                    }, {
                        period: '2012',
                        iphone: 80,
                        ipad: 60,
                        itouch: 70
                    }, {
                        period: '2013',
                        iphone: 70,
                        ipad: 200,
                        itouch: 140
                    }, {
                        period: '2014',
                        iphone: 180,
                        ipad: 150,
                        itouch: 140
                    }, {
                        period: '2015',
                        iphone: 105,
                        ipad: 100,
                        itouch: 80
                    },
                        {
                            period: '2016',
                            iphone: 250,
                            ipad: 150,
                            itouch: 200
                        }],
                    xkey: 'period',
                    ykeys: ['iphone', 'ipad', 'itouch'],
                    labels: ['iPhone', 'iPad', 'iPod Touch'],
                    pointSize: 3,
                    fillOpacity: 0,
                    pointStrokeColors:['#00bfc7', '#fdc006', '#9675ce'],
                    behaveLikeLine: true,
                    gridLineColor: '#e0e0e0',
                    lineWidth: 1,
                    hideHover: 'auto',
                    lineColors: ['#00bfc7', '#fdc006', '#9675ce'],
                    resize: true

                });

                //// Area Chart
                Morris.Area({
                    element: 'morris-area-chart2',
                    data: [{
                        period: '2010',
                        SiteA: 0,
                        SiteB: 0

                    }, {
                        period: '2011',
                        SiteA: 130,
                        SiteB: 100

                    }, {
                        period: '2012',
                        SiteA: 80,
                        SiteB: 60

                    }, {
                        period: '2013',
                        SiteA: 70,
                        SiteB: 200

                    }, {
                        period: '2014',
                        SiteA: 180,
                        SiteB: 150

                    }, {
                        period: '2015',
                        SiteA: 105,
                        SiteB: 90

                    },
                        {
                            period: '2016',
                            SiteA: 250,
                            SiteB: 150

                        }],
                    xkey: 'period',
                    ykeys: ['SiteA', 'SiteB'],
                    labels: ['Site A', 'Site B'],
                    pointSize: 0,
                    fillOpacity: 0.4,
                    pointStrokeColors:['#b4becb', '#01c0c8'],
                    behaveLikeLine: true,
                    gridLineColor: '#e0e0e0',
                    lineWidth: 0,
                    smooth: false,
                    hideHover: 'auto',
                    lineColors: ['#b4becb', '#01c0c8'],
                    resize: true

                });

                // Line Chart
                new Morris.Line({
                    // ID of the element in which to draw the chart.
                    element: 'myfirstchart',
                    // Chart data records -- each entry in this array corresponds to a point on
                    // the chart.
                    data: [
                        { year: '2008', value: 20 },
                        { year: '2009', value: 10 },
                        { year: '2010', value: 5 },
                        { year: '2011', value: 5 },
                        { year: '2012', value: 20 }
                    ],
                    // The name of the data record attribute that contains x-values.
                    xkey: 'year',
                    // A list of names of data record attributes that contain y-values.
                    ykeys: ['value'],
                    // Labels for the ykeys -- will be displayed when you hover over the
                    // chart.
                    labels: ['Value']
                });

/// Stacked
                Morris.Bar({
                    element: 'stacked',
                    data: [
                        {x: '2011 Q1', y: 3, z: 2, a: 3},
                        {x: '2011 Q2', y: 2, z: null, a: 1},
                        {x: '2011 Q3', y: 0, z: 2, a: 4},
                        {x: '2011 Q4', y: 2, z: 4, a: 3}
                    ],
                    xkey: 'x',
                    ykeys: ['y', 'z', 'a'],
                    labels: ['Y', 'Z', 'A'],
                    stacked: true
                });
// Extra chart
                Morris.Area({
                    element: 'extra-area-chart',
                    data: [{
                        period: '2010',
                        iphone: 0,
                        ipad: 0,
                        itouch: 0
                    }, {
                        period: '2011',
                        iphone: 50,
                        ipad: 15,
                        itouch: 5
                    }, {
                        period: '2012',
                        iphone: 20,
                        ipad: 50,
                        itouch: 65
                    }, {
                        period: '2013',
                        iphone: 60,
                        ipad: 12,
                        itouch: 7
                    }, {
                        period: '2014',
                        iphone: 30,
                        ipad: 20,
                        itouch: 120
                    }, {
                        period: '2015',
                        iphone: 25,
                        ipad: 80,
                        itouch: 40
                    }, {
                        period: '2016',
                        iphone: 10,
                        ipad: 10,
                        itouch: 10
                    }


                    ],
                    lineColors: ['#fb9678', '#01c0c8', '#8698b7'],
                    xkey: 'period',
                    ykeys: ['iphone', 'ipad', 'itouch'],
                    labels: ['Site A', 'Site B', 'Site C'],
                    pointSize: 0,
                    lineWidth: 0,
                    resize:true,
                    fillOpacity: 0.8,
                    behaveLikeLine: true,
                    gridLineColor: '#e0e0e0',
                    hideHover: 'auto'

                });



            });



        }(window.jQuery);

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("OrdersController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;


        (function ($) {

            $(function () {
                $('.panel')
                    .on('panel:toggle', function () {
                        var $this,
                            direction;

                        $this = $(this);
                        direction = $this.hasClass('panel-collapsed') ? 'Down' : 'Up';

                        $this.find('.panel-body, .panel-footer')[ 'slide' + direction ](200, function () {
                            $this[ (direction === 'Up' ? 'add' : 'remove') + 'Class' ]('panel-collapsed')
                        });
                    })
                    .on('panel:dismiss', function () {
                        var $this = $(this);

                        if (!!($this.parent('div').attr('class') || '').match(/col-(xs|sm|md|lg)/g) && $this.siblings().length === 0) {
                            $row = $this.closest('.row');
                            $this.parent('div').remove();
                            if ($row.children().length === 0) {
                                $row.remove();
                            }
                        } else {
                            $this.remove();
                        }
                    })
                    .on('click', '[data-panel-toggle]', function (e) {
                        e.preventDefault();
                        $(this).closest('.panel').trigger('panel:toggle');
                    })
                    .on('click', '[data-panel-dismiss]', function (e) {
                        e.preventDefault();
                        $(this).closest('.panel').trigger('panel:dismiss');
                    })
                    /* Deprecated */
                    .on('click', '.panel-actions a.fa-caret-up', function (e) {
                        e.preventDefault();
                        var $this = $(this);

                        $this
                            .removeClass('fa-caret-up')
                            .addClass('fa-caret-down');

                        $this.closest('.panel').trigger('panel:toggle');
                    })
                    .on('click', '.panel-actions a.fa-caret-down', function (e) {
                        e.preventDefault();
                        var $this = $(this);

                        $this
                            .removeClass('fa-caret-down')
                            .addClass('fa-caret-up');

                        $this.closest('.panel').trigger('panel:toggle');
                    })
                    .on('click', '.panel-actions a.fa-times', function (e) {
                        e.preventDefault();
                        var $this = $(this);

                        $this.closest('.panel').trigger('panel:dismiss');
                    });
            });

        })(jQuery);

    }]);



app.controller("PieChartsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $(function () {
            $('.easy-pie-chart-1').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#17bb6a',
                lineWidth: 3,
                animate: 1000,
                lineCap: 'square',
                trackColor: '#e5e5e5',
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
            $('.easy-pie-chart-2').easyPieChart({
                easing: 'easeOutBounce',
                barColor: '#17bb6a',
                lineWidth: 3,
                trackColor: false,
                lineCap: 'butt',
                scaleColor: false,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("ProductsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
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



app.controller("ProgressBarController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("RangeSliderController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $("#range_01").ionRangeSlider();

        $("#range_02").ionRangeSlider({
            min: 100,
            max: 1000,
            from: 550
        });
        $("#range_03").ionRangeSlider({
            type: "double",
            grid: true,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: "$"
        });
        $("#range_04").ionRangeSlider({
            type: "double",
            grid: true,
            min: -1000,
            max: 1000,
            from: -500,
            to: 500
        });
        $("#range_16").ionRangeSlider({
            grid: true,
            min: 18,
            max: 70,
            from: 30,
            prefix: "Age ",
            max_postfix: "+"
        });
        $("#range_18").ionRangeSlider({
            type: "double",
            min: 100,
            max: 200,
            from: 145,
            to: 155,
            prefix: "Weight: ",
            postfix: " million pounds",
            decorate_both: false
        });
        $("#range_22").ionRangeSlider({
            type: "double",
            min: 1000,
            max: 2000,
            from: 1200,
            to: 1800,
            hide_min_max: true,
            hide_from_to: true,
            grid: true
        });


    }]);


app.controller("TabPanelsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        (function ($) {

            $(function () {
                $('.panel')
                    .on('panel:toggle', function () {
                        var $this,
                            direction;

                        $this = $(this);
                        direction = $this.hasClass('panel-collapsed') ? 'Down' : 'Up';

                        $this.find('.panel-body, .panel-footer')[ 'slide' + direction ](200, function () {
                            $this[ (direction === 'Up' ? 'add' : 'remove') + 'Class' ]('panel-collapsed')
                        });
                    })
                    .on('panel:dismiss', function () {
                        var $this = $(this);

                        if (!!($this.parent('div').attr('class') || '').match(/col-(xs|sm|md|lg)/g) && $this.siblings().length === 0) {
                            $row = $this.closest('.row');
                            $this.parent('div').remove();
                            if ($row.children().length === 0) {
                                $row.remove();
                            }
                        } else {
                            $this.remove();
                        }
                    })
                    .on('click', '[data-panel-toggle]', function (e) {
                        e.preventDefault();
                        $(this).closest('.panel').trigger('panel:toggle');
                    })
                    .on('click', '[data-panel-dismiss]', function (e) {
                        e.preventDefault();
                        $(this).closest('.panel').trigger('panel:dismiss');
                    })
                    /* Deprecated */
                    .on('click', '.panel-actions a.fa-caret-up', function (e) {
                        e.preventDefault();
                        var $this = $(this);

                        $this
                            .removeClass('fa-caret-up')
                            .addClass('fa-caret-down');

                        $this.closest('.panel').trigger('panel:toggle');
                    })
                    .on('click', '.panel-actions a.fa-caret-down', function (e) {
                        e.preventDefault();
                        var $this = $(this);

                        $this
                            .removeClass('fa-caret-down')
                            .addClass('fa-caret-up');

                        $this.closest('.panel').trigger('panel:toggle');
                    })
                    .on('click', '.panel-actions a.fa-times', function (e) {
                        e.preventDefault();
                        var $this = $(this);

                        $this.closest('.panel').trigger('panel:dismiss');
                    });
            });

        })(jQuery);
    }]);



app.controller("TableBasicController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
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



app.controller("DataTablesController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

    }]);



app.controller("TableEditableController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("TableJSGridController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("TableResponsiveController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        vm.tableData = [
            {
                title: 'Avatar',
                link:'http://en.wikipedia.org/wiki/Avatar_(2009_film)',
                rank: '1',
                year: '11/2009',
                rating: '83',
                gross : '2.7B'
            },
            {
                title:'Titanic',
                link:'http://en.wikipedia.org/wiki/Titanic_(1997_film)',
                rank: '2',
                year: '12/1997',
                rating: '88',
                gross : '2.1B'
            },
            {
                title:'The Avengers',
                link:'http://en.wikipedia.org/wiki/The_Avengers_(2012_film)',
                rank: '3',
                year: '3/2012',
                rating: '92',
                gross : '1.5B'
            },
            {
                title:'Harry Potter and the Deathly Hallows-Part 2',
                link:'http://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2',
                rank: '4',
                year: '2011',
                rating: '96',
                gross : '1.3B'
            },
            {
                title:'Frozen',
                link:'http://en.wikipedia.org/wiki/Frozen_(2013_film)',
                rank: '5',
                year: '2013',
                rating: '89',
                gross : '1.2B'
            },
            {
                title:'Iron Man 3',
                link:'http://en.wikipedia.org/wiki/Iron_Man_3',
                rank: '3',
                year: '3/2012',
                rating: '92',
                gross : '1.5B'
            },
            {
                title:'Transformers: Dark of the Moon',
                link:'http://en.wikipedia.org/wiki/Transformers:_Dark_of_the_Moon',
                rank: '7',
                year: '2011',
                rating: '36',
                gross : '1.1B'
            },
            {
                title:'The Lord of the Rings: The Return of the King',
                link:'http://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Return_of_the_King',
                rank: '8',
                year: '2003',
                rating: '95',
                gross : '1.1B'
            },
            {
                title:'Skyfall',
                link:'http://en.wikipedia.org/wiki/Skyfall',
                rank: '9',
                year: '2012',
                rating: '92',
                gross : '1.1B'
            },
            {
                title:'Transformers: Age of Extinction',
                link:'http://en.wikipedia.org/wiki/Transformers:_Age_of_Extinction',
                rank: '10',
                year: '2014',
                rating: '18',
                gross : '1.0B'
            },

        ];

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("ThemifyIconsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);



app.controller("TooltipController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $(function() {
            //tooltip
            $(function() {
                $('[data-toggle="tooltip"]').tooltip()
            })


            //Popover
            $(function() {
                $('[data-toggle="popover"]').popover()
            })

            // menu

            $('header select').change(function() {
                var goTo = $(this).val();
                var section = $('#'+goTo);
                var offset = section.offset().top;
                $('html, body').scrollTop(offset);
            });

            // usual tooltips

            $('.tooltip').not('#welcome .tooltip').tooltipster();

            $('#welcome .tooltip').tooltipster({
                theme: 'tooltipster-light'
            });

            // demos

            $('#demo-default').tooltipster({});



            $('#demo-html').tooltipster({
                // setting a same value to minWidth and maxWidth will result in a fixed width
                maxWidth: 400,
                side: 'right'
            });

            $('#demo-theme').tooltipster({
                animation: 'grow',
                theme: 'tooltipster-pink'
            });



            $('#demo-events').tooltipster({
                trigger: 'click'
            });

            /*
             // for testing purposes
             var instance = $('#demo-events').tooltipster('instance');
             instance.on('reposition', function(){
             alert('hey');
             });
             */

            $(window).keypress(function() {
                $('#demo-events').tooltipster('hide');
            });

            $('#demo-interact').tooltipster({
                contentAsHTML: true,
                interactive: true
            });

            $('#demo-touch').tooltipster({
                trigger: 'click',
                functionBefore: function(instance, helper){
                    if (helper.event.type == 'click') {
                        instance.content('You opened me with a regular mouse click :)');
                    }
                    else {
                        instance.content('You opened me by a tap on the screen :)');
                    }
                }
            });
            $('#demo-imagemaparea').tooltipster();

            $('#demo-multiple').tooltipster({
                animation: 'swing',
                content: 'North',
                side: 'top',
                theme: 'tooltipster-borderless'
            });
            $('#demo-multiple').tooltipster({
                content: 'East',
                multiple: true,
                side: 'right',
                theme: 'tooltipster-punk'
            });
            $('#demo-multiple').tooltipster({
                animation: 'grow',
                content: 'South',
                multiple: true,
                side: 'bottom',
                theme: 'tooltipster-light'
            });
            $('#demo-multiple').tooltipster({
                animation: 'fall',
                content: 'West',
                multiple: true,
                side: 'left',
                theme: 'tooltipster-shadow'
            });

            var complexInterval;

            $('#demo-complex')
                .tooltipster({
                    trackerInterval: 15,
                    trackOrigin: true,
                    trigger: 'custom'
                })
                .click(function(){

                    var $this = $(this);

                    if($this.hasClass('complex')){

                        $this
                            .removeClass('complex')
                            .tooltipster('hide')
                            .css({
                                left: '',
                                top: ''
                            });

                        clearInterval(complexInterval);
                    }
                    else {

                        var bcr = this.getBoundingClientRect(),
                            odd = true;

                        $this
                            .addClass('complex')
                            .css({
                                left: bcr.left + 'px',
                                top: bcr.top + 'px'
                            })
                            .tooltipster('show');

                        complexInterval = setInterval(function(){

                            var offset = odd ? 200 : 0;

                            $this.css({
                                left: bcr.left + offset
                            });

                            odd = !odd;
                        }, 2000);
                    }
                });

            $('#demo-position').tooltipster({
                // 8 extra pixels for the arrow to overflow the grid
                functionPosition: function(instance, helper, data){

                    // this function is pretty dumb and does not check if there is actually
                    // enough space available around the tooltip to move it, it just makes it
                    // snap to the grid. You might want to do something smarter in your app!

                    var gridBcr = $('#demo-position-grid')[0].getBoundingClientRect(),
                        arrowSize = parseInt($(helper.tooltipClone).find('.tooltipster-box').css('margin-left'));

                    // override these
                    data.coord = {
                        // move the tooltip so the arrow overflows the grid
                        left: gridBcr.left - arrowSize,
                        top: gridBcr.top
                    };

                    return data;
                },
                maxWidth: 228,
                side: ['right']
            });

            $('#demo-plugin').tooltipster({
                plugins: ['follower']
            });

            // nested demo
            $('#nesting').tooltipster({
                content: $('<span>Hover me too!</span>'),
                functionReady: function(instance){

                    // the nested tooltip must be initialized once the first
                    // tooltip is open, that's why we do this inside
                    // functionReady()
                    instance.content().tooltipster({
                        content: 'I am a nested tooltip!',
                        distance: 0
                    });
                },
                interactive: true
            });

            // grouped demo
            $('.tooltip_slow').tooltipster({
                animationDuration: 1000,
                delay: 1000
            });

            $.tooltipster.group('tooltip_group');

            // themes

            $('.tooltipster-light-preview').tooltipster({
                theme: 'tooltipster-light'
            });
            $('.tooltipster-borderless-preview').tooltipster({
                theme: 'tooltipster-borderless'
            });
            $('.tooltipster-punk-preview').tooltipster({
                theme: 'tooltipster-punk'
            });
            $('.tooltipster-noir-preview').tooltipster({
                theme: 'tooltipster-noir'
            });
            $('.tooltipster-shadow-preview').tooltipster({
                theme: 'tooltipster-shadow'
            });

        });
    }]);


app.controller("TreeViewController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);




app.controller("TypographyController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        !function($) {
            "use strict";
            $(function(){


                toastr.options = {
                    "debug": false,
                    "newestOnTop": false,
                    "positionClass": "toast-bottom-right",
                    "closeButton": true,
                    "progressBar": true
                };

                toastr.info('Info - This is a custom info notification');

                setTimeout(function(){
                    toastr.success('Success - This is a success notification');
                }, 1000);
                setTimeout(function(){
                    toastr.warning('Warning - This is a warning notification');
                }, 2000);
                setTimeout(function(){
                    toastr.error('Error - This is a error notification');
                }, 3000);







                $('.scrollerchat').slimScroll({
                    height: '393px'
                });
                var chart = c3.generate({
                    bindto: '#demo1',
                    data: {
                        columns: [
                            ['data1', 30, 20, 50, 40, 60, 50],
                            ['data2', 200, 130, 90, 240, 130, 220],
                            ['data3', 300, 200, 160, 400, 250, 250]
                        ]
                    }
                });
                var chart = c3.generate({
                    bindto: '#spline',
                    data: {
                        columns: [
                            ['data1', 30],
                            ['data2', 120],
                        ],
                        type : 'donut',
                        colors: {
                            data1: '#ff0000',
                            data2: '#4CAF50',
                            data3: '#00bcd4',

                        },
                        onclick: function (d, i) { console.log("onclick", d, i); },
                        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                    },
                    donut: {
                        title: "Iris Petal Width"
                    }
                });

//Map
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
                            fill: '#00bcd4',
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


                ///Calendar
                (function () {
                    $('#cw-body').fullCalendar({

                        header: {
                            left: 'prev, next',
                            center: 'title',
                            right: 'month, agendaWeek, agendaDay'
                        },
                        buttonIcons: {
                            prev: 'none fa fa-arrow-left',
                            next: 'none fa fa-arrow-right',
                            prevYear: 'none fa fa-arrow-left',
                            nextYear: 'none fa fa-arrow-right'
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
                                title: 'Long',
                                start: '2014-06-07',
                                end: '2014-06-8',
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
                                start: '2014-06-10',
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

            });
        }(window.jQuery);
    }]);



app.controller("VectorMapsController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;

        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });

        //Map
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
                    fill: '#00bcd4',
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
    }]);



app.controller("WeatherIconController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
    function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
        var vm = this;
        $('.panel-action-dismiss').click(function(){
            $(this).parent().parent().parent('.panel').parent().remove();
        });
    }]);
