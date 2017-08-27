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
        scaleStartValue: 0,
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