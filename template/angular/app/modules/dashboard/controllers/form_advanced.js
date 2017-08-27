
dashboard.controller("FormAdvancedController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;
    $('.panel-action-dismiss').click(function(){
        $(this).parent().parent().parent('.panel').parent().remove();
    });

    $(function () {

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

    });
}]);
