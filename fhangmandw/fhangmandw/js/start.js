checkKeyboard();

function start() {
	picks.length = 0;
	correct.length = 0;
	usedLetters.length = 0;

	initStore();
	randomWord();
	createButtons();
	fillSecret();
	checkLetter(getPick());
}

function initStore() {
    if (!store.enabled) {
        alert('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
        return
    }
    jQuery(function($){
    	$('#game').hide();
    	$('#game').show("fade", 1200);
	});
}

start();