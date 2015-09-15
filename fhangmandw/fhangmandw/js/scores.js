var points;
var schoolname;
var highscores = [];

jQuery(function($){
    createHighscorelist();
    $('#results').hide();
    $('#results').show("drop", 1200);

    $('#results').click(function() {
    	$('#results').toggle("fade");
  		setTimeout(function () {
               location.href = 'index.html';
        }, 500);
  	});
});