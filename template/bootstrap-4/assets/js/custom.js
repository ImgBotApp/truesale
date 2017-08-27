

!function($) {
    "use strict";
	// Minimalize menu
    $('.navbar-minimalize').on('click', function () {
		if($(window).width() > 991)
		{
			 $("body").toggleClass("mini-navbar");
		}
		else
		{
        $("body").toggleClass("mini-navbar-show");
		}


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