var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ["fhdw", "informatik", "bwl", "dual", "studium", "finanzmathematik", "bilanz", "guv", "gewinn", "javascript", "java", "software", "wirtschaft", "klausur", "praesentation", "office", "praxis"];
var usedWords = [];
var usedLetters = [];
var word;
var lives = 4;
var tries = 10;
var points = 0;
var pick; //Buchstaben Wahl des Nutzers
var picks = []; //Alle ausgewählten Buchstaben des Nutzers
var correct = []; //Richtige picks
var gameover;
var letterFound = 0;

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
	    else{
	    	gameover = true;
	        alert("Du bist zu gut für dieses Spiel");
	    }
	});
}

var getPick = function() {
	jQuery(function($){
		$('ul#letterButton li#abc').click(function() {
			var pick = $(this).text();
			//console.log("Picked " + pick);
			checkLetter(pick);
			return pick;
		});
	});
}

//Pruefen ob der Benutzer einen richtigen Buchstaben gewählt hat
//Wenn richtig dann decke auf und tausche _ durch richtigen Buchstaben
var checkLetter = function(userPick) { //Geht ohne, weil per onclick Funktion das aktuelle Element angetriggert wird, der gewählte Buchstabe ist jeweils in "pick" drinnen
		jQuery(function($){
				if(userPick != null && $.inArray(userPick, usedLetters) == -1) {
				//TODO: 2 gleiche Buchstaben hintereinander werden nicht gefunden z.B. bei "Gewinn" oder "aa" nur 1.; bei "bbb" werden 1. und 3. gefunden
				usedLetters.push(userPick);

				for (var i = 0; i < word.length; i++) {
				    if (userPick === word[i]) {
				        letterFound = 1;
				        console.log("letterFound " + letterFound);
			          //Nur einmalig eintragen
			          if(jQuery.inArray(userPick, correct) == -1) {
			          	correct.push(userPick);
			          	console.log("correct: " + correct);
			          	//Unterstrich durch richtigen Buchstaben aufdecken
			          	for(var a = 0; a < correct.length; a++) {
			          		$('ul#secretField li#'+correct[a]).text(correct[a]);
			          	}
				          	/*if (letterFound == 0) { 
				          		tries--;
				          		console.log("Tries: " + tries);
				          	}*/
			          	wordComplete();
			          	
			          }
			          
			          var position = ++i;
			          console.log("Position " + position);
			          //Array picks mit Funden füllen
			          picks.push(userPick);
			          console.log(picks);
				    }
			     }

				    if (letterFound == 0) {
				        tries--;
				        $('#tplaceholder').html(tries);
				        console.log("Tries: " + tries);
				        if (tries === 0) {
				            lives--;
				            fhdwLife();
				            revealWord();
				            $('#lplaceholder').html(lives);
				            tries = 10;
				            $('#tplaceholder').html(tries);
				            console.log("Lives: " + lives);
				            checkEndgame();
				        }
				    }
			     letterFound = 0;
				}
				else 
				{
				    console.log("Bereits ausprobierter Buchstabe wurde nochmal probiert.");
				}
            /*Überbleibsel, nur noch für Debugging notwendig: 
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
            */
		});
	}

//Aufdecken des Wortes wenn man keine Tries mehr hat; noch nicht eingesetzt, weil noch an richtiger Stelle resetet werden muss
function revealWord() {
	for(var i = 0; i < word.length; i++) {
		$('ul#secretField li#'+word[i]).text(word[i]);
	}
}

//Entweder Inhalt der Unterstrich li Elemente auf noch vorhanden sein prüfen (Alternativ word mit correct gegenchecken (String vs Array))
var wordComplete = function() {
	var counter = 0;
	jQuery(function($){
		for(var i = 0; i < word.length; i++) {
			if($('ul#secretField li#'+word[i]).text() == '_') {
				counter++;
			}
		}
		//Wort ist vollständig
		if (counter == 0) {
		    alert("Wort komplett");

            //picks und correct Array leeren
			picks.length = 0;
			correct.length = 0;
			usedLetters.length = 0;

            //neues Wort + Striche generieren
			randomWord();
			fillSecret();

		    //Punktevergabe
			points++;
			$('#pplaceholder').html(points);
		}
	});
}

//Steuerung des FHDW Logos als Lebensanzeige
function fhdwLife() {
	//Von Anfang an alle spans bzw. das ganze div disablen
	//Wenn 4 lives dann blende
	if(lives == 3) {
		$("#fhdwLogo span#f" ).toggle( "fade" );
	}
	else if(lives == 2) {
		$("#fhdwLogo span#h" ).toggle( "fade" );
	}
	else if(lives == 1) {
		$("#fhdwLogo span#d" ).toggle( "fade" );
	}
	else {
		$("#fhdwLogo span#w" ).toggle( "fade" );
	}	
}

function savePoints() {
	store.set('id', points);
	console.log("store get: " + store.get('id', points));
}

function scoring() {

}

function checkEndgame() {


    if (lives === 0) {
        $('#tplaceholder').html('0'); //schafft er so schnell nicht, deshalb Timeout in der Folge
        setTimeout('', 1000);
        savePoints(); //ZUM TESTEN
        alert("Alle Leben aufgebraucht, und tschüss!");
        window.location.href = 'gameover.html';
    }
    else {
			picks.length = 0;
			correct.length = 0;
			usedLetters.length = 0;
			randomWord();
			fillSecret();
    }
}

//eventListener bzw. onclick Event für die Buchstaben Buttons -> ausführen von checkLetters()


//Tastatureingaben

//Funktionsaufrufe
randomWord();
createButtons();
fillSecret();
checkLetter(getPick());