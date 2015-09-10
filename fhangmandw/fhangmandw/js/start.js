checkKeyboard();

function start() {
	picks.length = 0;
	correct.length = 0;
	usedLetters.length = 0;

	randomWord();
	createButtons();
	fillSecret();
	checkLetter(getPick());
	loadHighscores();
	checkNewHighscore(points);
}

start();