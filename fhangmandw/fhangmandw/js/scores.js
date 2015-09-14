var points;
var schoolname;
var highscores = [];

function initStore() {
    if (!store.enabled) {
        alert('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
        return
    }
}

createHighscorelist();

jQuery(function($){
    $('#results').hide();
    $('#results').show("drop", 1200);

    $('#results').click(function() {
    	$('#results').toggle("fade");
  		setTimeout(function () {
               location.href = 'index.html';
        }, 500);
  	});
});