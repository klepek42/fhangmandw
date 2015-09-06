var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ["fhdw", "informatik", "bwl", "dual", "studium", "finanzmathematik", "bilanz", "guv", "gewinn", "javascript", "java", "software", "wirtschaft", "klausur", "praesentation", "office", "praxis"];
var usedWords = [];
var word;
var lives;
var points = 0;

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

//Waehle zufaelliges Wort aus Woerterarray und entferne Wort aus Array in "Papierkorb-Array" usedWords
function randomWord() {

    word = words[Math.floor(Math.random() * (words.length))];
    usedWords.push(word);

    if (words.length > 0)
    {
        for (var i = 0; i < words.length; i++) {
            if (words[i] == word) {
                words.splice(i, 1);
                console.log(words.length);
            }
        }
    }
    else
    {
        //Alert erfolgte in Methode fillSecret bei Array-Länge 0
    }
    

	return word;
}
randomWord();

//Befüllen des Ratefelders mit Elementen in Abhängigkeit des zufällig gewählten Wortes
var fillSecret = function() {
	jQuery(function($){
	//Reset fuer "nächstes Wort"
	    $("#area ul").empty();

	    if (words.length > 0) {
	        for (var j = 0; j < word.length; j++) {
	            //Erstelle so viele Underscores wie die Wortlänge
	            $("#area ul").append('<li>_</li>');
	        }
	    }
	    else
	    {
	        alert("Du bist zu gut für dieses Spiel");
	    }
	});
}
fillSecret();

//Pruefen ob der Benutzer einen richtigen Buchstaben gewählt hat
//Wenn richtig dann decke auf und tausche _ durch richtigen Buchstaben

//Anmerkung Daniel: Würde ich mit Übergabeparameter implementieren, sprich: var checkLetter = function (letter) und Rückgabewert ebenfalls mit 0 und 1, damit ich das in meinem Tastaturlistener benutzen kann
var checkLetter = function() {
	if(letters[x] === letter) {
	}
}

//eventListener bzw. onclick Event für die Buchstaben Buttons -> ausführen von checkLetters()

<<<<<<< HEAD
//Tastatureingaben
=======
//Tastatureingaben

>>>>>>> origin/master
