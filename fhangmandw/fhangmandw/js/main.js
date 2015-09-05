var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ["fhdw", "informatik", "bwl", "dual", "studium", "finanzmathematik", "bilanz", "guv", "gewinn", "javascript", "java", "software", "wirtschaft", "klausur", "praesentation", "office", "praxis"];
var word;
var lives;
var points = 100;

//Erzeugen der Buttons mit Buchstaben
var createButtons = function() {
	jQuery(function($){
		for(var i = 0; i < letters.length; i++) {
			var letter = letters[i];
			$("#buttons ul").append("<li>" + letter + "</li>");
			
		}
	});
}
createButtons();

//Waehle zufaelliges Wort aus Woerterarray
function randomWord() {
	word = words[Math.floor(Math.random()*(words.length))];
	console.log("randomWord = " + word);
	return word;
}
randomWord();

//Befüllen des Ratefelders mit Elementen in Abhängigkeit des zufällig gewählten Wortes
var fillSecret = function() {
	jQuery(function($){
	//Reset fuer "nächstes Wort"
	$("#area ul").empty();
		for(var j = 0; j < word.length; j++) {
		//Erstelle so viele Underscores wie die Wortlänge
			$("#area ul").append('<li>_</li>');
		}
	});
}
fillSecret();

//Pruefen ob der Benutzer einen richtigen Buchstaben gewählt hat
//Wenn richtig dann decke auf und tausche _ durch richtigen Buchstaben
var checkLetter = function() {
	if(letters[x] === letter) {
	}
}

//eventListener bzw. onclick Event für die Buchstaben Buttons -> ausführen von checkLetters()

//Tastatureingaben

//Idee: Punktevergabe - Richtiger Buchstabe = 100 Punkte - Falscher Buchstabe -25 ?