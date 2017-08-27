!function($) {
    "use strict";
$(function(){

   
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