
var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'flash','eehNavigation',
    'eehMetisMenu','ui.slimscroll',
    //main modules
     'dashboard']);


app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider','eehNavigationProvider', function ($stateProvider, $locationProvider, $urlRouterProvider,eehNavigationProvider, $modalInstance) {

    //IdleScreenList
    $stateProvider
       .state('app', {
           url: '/app',
           templateUrl: 'app/common/app.html',
           controller: 'appCtrl',
           controllerAs: 'vm',
           data: {
               pageTitle: 'Home'
           }
       });

    $urlRouterProvider.otherwise('app/dashboard');

}]);

// set global configuration of application and it can be accessed by injecting appSettings in any modules
app.constant('appSettings', appConfig);