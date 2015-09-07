var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ["fhdw", "informatik", "bwl", "dual", "studium", "finanzmathematik", "bilanz", "guv", "gewinn", "javascript", "java", "software", "wirtschaft", "klausur", "praesentation", "office", "praxis"];
var usedWords = [];
var word;
var lives;
var points = 0;
var pick; //Buchstaben Wahl des Nutzers
var picks = []; //Alle ausgewählten Buchstaben des Nutzers
var correct = []; //Richtige picks

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
    console.log(word);
	return word;
}

//Erzeugen der Buttons mit Buchstaben
var createButtons = function() {
	jQuery(function($){
		for(var i = 0; i < letters.length; i++) {
			//Einsetzen aller Buchstaben in Variable
			var letter = letters[i];
			//Erzeugen von li Elementen mit Buchstaben
			var abcEl = $('<li>' + letter + '</li>');
			//Vergabe einer id für spätere Identifizierung bei checkLetter()
			$(abcEl).attr('id', 'abc');
			//Anhängen der Elemente an ul
			$("#buttons ul").append(abcEl);
		}
		
	});
}

//Befüllen des Ratefelders mit Elementen in Abhängigkeit der Wortlänge
var fillSecret = function() {
	jQuery(function($){
	//Reset fuer "nächstes Wort"
	    $("#area ul").empty();

	    if (words.length > 0) {
	        for (var j = 0; j < word.length; j++) {
	        	//Unterstrich li Elemente
	        	var secretEl = $('<li>_</li>')
	        	//Vergabe einer id für spätere Prüfung
				$(secretEl).attr('id', word[j]);
	            //Erstelle so viele Unterstriche wie die Wortlänge
	            $("#area ul").append(secretEl);
	        }
	    }
	    else
	    {
	        alert("Du bist zu gut für dieses Spiel");
	    }
	});
}

//Pruefen ob der Benutzer einen richtigen Buchstaben gewählt hat
//Wenn richtig dann decke auf und tausche _ durch richtigen Buchstaben

//Anmerkung Daniel: Würde ich mit Übergabeparameter implementieren, sprich: var checkLetter = function (letter) und Rückgabewert ebenfalls mit 0 und 1, damit ich das in meinem Tastaturlistener benutzen kann
var checkLetter = function() { //Geht ohne, weil per onclick Funktion das aktuelle Element angetriggert wird, der gewählte Buchstabe ist jeweils in "pick" drinnen
		jQuery(function($){
			$('ul#letterButton li#abc').click(function() {
				var pick = $(this).text();
				console.log("Picked " + pick);
				//Buchstabenprüfung
				//TODO: 2 gleiche Buchstaben hintereinander werden nicht gefunden z.B. bei "Gewinn" oder "aa" nur 1.; bei "bbb" werden 1. und 3. gefunden
				var test = word.length + 1;
				for (var i = 0; i < test; i++) {
			        if(pick === word[i]) {
			          //Nur einmalig eintragen
			          if(jQuery.inArray(pick, correct) == -1) {
			          	correct.push(pick);
			          	console.log("correct: " + correct);
			          	//Unterstriche aufdecken
			          	for(var a = 0; a < correct.length; a++) {
			          		$('ul#secretField li#'+correct[a]).text(correct[a]); 
			          	}
			          }
			          var position = ++i;
			          console.log("Fund bei " + position);
			          //Array picks mit Funden füllen
			          picks.push(pick);
			          console.log(picks);
			        }   
			    }
	    		//Fund
		        if(picks.length > 0) {
		        	console.log("Fund - return 1");
		        	return 1;
		        }
		        //Kein Fund
		        else {
		        	console.log("Kein Fund - return 0");
		        	return 0;
		        }
			});
		});
	}

//eventListener bzw. onclick Event für die Buchstaben Buttons -> ausführen von checkLetters()


//Tastatureingaben

//Funktionsaufrufe
randomWord();
createButtons();
fillSecret();
checkLetter();

/* Snippet: Ansatz könnte noch brauchbar sein
$('li').each(function () {
    $(this).attr('id', 'abc');
});*/

// FOR mit $('ul#secretField li#'+word[j]).text(word[j]);  aufdecken aller Buchstaben!