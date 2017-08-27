
dashboard.controller("TableResponsiveController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
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
