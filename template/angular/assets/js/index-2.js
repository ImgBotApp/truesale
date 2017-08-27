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