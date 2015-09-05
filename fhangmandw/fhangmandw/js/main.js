var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ["fhdw", "informatik", "bwl"];
var word;
var lives;
var points;

//Waehle zufaelliges Wort aus Woerterarray
function randomWord() {
	word = words[Math.floor(Math.random()*(words.length))];
	console.log("randomWord = " + word);
	return word;
}

randomWord();

//Clevere Funktion zum erzeugen der Buttons mit Buchstaben
var createButtons = function() {
	for(var i = 0; i < letters.length; i++) {
		//Ansatz ungefaehr in diesem Stil
		var addBtns = document.createElement('li');
		buttons.appendChild('letters');
	}
}

//createButtons();

//Befüllen des Ratefelders mit Elementen in Abhängigkeit des zufällig gewählten Wortes
var secretArea = function() {
	for(var j = 0; j < word.length-1; j++) {

	}
}

//Pruefen ob der Benutzer einen richtigen Buchstaben gewählt hat
//Wenn richtig dann decke auf und tausche _ durch richtigen Buchstaben
var checkLetter = function() {
	if(letters[x] === letter) {
		;
	}
}

//eventListener bzw. onclick Event für die Buchstaben Buttons -> ausführen von checkLetters()
