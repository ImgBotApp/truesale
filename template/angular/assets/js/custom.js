

!function($) {
    "use strict";
	// Minimalize menu
    $('.navbar-minimalize').click(function () {
        $("body").toggleClass("mini-navbar");


    });
   $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover()
	// $.material.init();
	
$(function(){
    $('.scroller').slimScroll({
        height: '250px'
    });
	//$('#input-date-added').datepicker();
	//$('#input-date-modified').datepicker();
	$('#menu').metisMenu();
});
	
	
	
	}(window.jQuery);	