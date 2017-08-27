
dashboard.controller("FormTextEditorController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    $('.panel-action-dismiss').click(function(){
        $(this).parent().parent().parent('.panel').parent().remove();
    });

    $(document).ready(function () {

        $('.summernote').summernote();

    });
    var edit = function () {
        $('.click2edit').summernote({focus: true});
    };
    var save = function () {
        var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
        $('.click2edit').destroy();
    };
}]);
