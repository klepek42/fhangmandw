var points;
var schoolname;
var highscores = [];

jQuery(function($){
    $('#results').hide();
    $('#results').show("fade", 2000);
    createHighscorelist();
    $('#results').click(function() {
    	$('#results').toggle("fade");
  		setTimeout(function () {
               location.href = 'index.html';
        }, 500);
  	});
    $('#back').toggle("pulsate", { times: 80 }, 50000);
});