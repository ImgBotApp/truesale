
dashboard.controller("GalleryController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
//MAGNIFIC POPUP
    $(function () {
        $('.show-image').magnificPopup({type: 'image'});
    });
}]);
