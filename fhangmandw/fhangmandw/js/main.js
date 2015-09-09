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

//Local Highscores TEST; könnte komfortabeler sein; am Ende dann einblenden statt Seitenwechsel
var schoolname;
var result = {school:"", score:""};
var highscores = [];
//var result = {school:"", score:""};

//Waehle zufaelliges Wort aus Woerterarray und entferne Wort aus Array in "Papierkorb-Array" usedWords
function randomWord() {
    word = words[Math.floor(Math.random() * (words.length))];
    usedWords.push(word);

    if (words.length > 0) {
        for (var i = 0; i < words.length; i++) {
            if (words[i] == word) {
                words.splice(i, 1);
                console.log(words.length);
            }
        }
    }
    else {
       	//Alert erfolgte in Methode fillSecret bei Array-Länge 0
    }
    console.log(word);
    return word;
}

//Erzeugen der Buttons mit Buchstaben
var createButtons = function() {
	jQuery(function($){
		for(var i = 0; i < letters.length; i++) {
			//Umbruch bzw. einstellen der Tastatur
			if(i % 13 == 0) {
				var br = $('<br/>');
				$("#buttons ul").append(br);
			}
			//Einsetzen aller Buchstaben in Variable
			var letter = letters[i];
			//Erzeugen von li Elementen mit Buchstaben
			var abcEl = $('<li>' + letter + '</li>');
			//Vergabe einer id für spätere Identifizierung bei checkLetter()
			$(abcEl).attr('id', 'abc');
			//Klasse für Keyboards.js
			$(abcEl).addClass(letters[i]);
			//Anhängen der Elemente an ul
			$("#buttons ul").append(abcEl);
		}
	});
}

function removeActive() {
	jQuery(function($){
		for(var i = 0; i < letters.length; i++) {
			$("#buttons ul li#abc").removeClass("active");
			console.log("removeActive()");
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
	    else {
	    	checkEndgame();
	        alert("Du bist zu gut für dieses Spiel");
	    }
	});
}

var getPick = function() {
	jQuery(function($){
		$('ul#letterButton li#abc').click(function() {
			$(this).addClass("active");
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
				            removeActive();
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
				else {
				    console.log("Bereits ausprobierter Buchstabe wurde nochmal probiert.");
				}
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
			removeActive();
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
	else if(lives == 0) {
		$("#fhdwLogo span#w" ).toggle( "fade" );
	}	
}

function savePoints() {
	//store.set('id', points);
	//console.log("store get: " + store.get('id', points));
}

function scoring() {

}

function highscore() {
	var schoolname = prompt("Neuer Highscore! Gib den Namen deiner Schule ein!");
    result.schoolname = schoolname;
    result.points = points;
    console.log("Schule " + result.schoolname + " erzielte " + result.points);
    highscores.push(result);
    console.log("Highscores: " + highscores.length);

    for(var i = 0; i < highscores.length; i++) {
    	console.log("Highscore " + i + " " + highscores[i]);
    }
    //highscoreList.sort(function(a,b) { return (b.score - a.score ) });
    store.set(result, {school:schoolname, score:points});
    
    store.forEach(function(key, val) {
    	console.log(key, '==', val)
    })
}

function checkEndgame() {


    if (lives === 0 || words.length <= 0) {
        $('#tplaceholder').html('0'); //schafft er so schnell nicht, deshalb Timeout in der Folge
        setTimeout('', 1000);
        savePoints(); //ZUM TESTEN
        alert("Alle Leben aufgebraucht, und tschüss!");
        highscore();
        //window.location.href = 'gameover.html'; //fuer localHighscore erstmal ausgemacht
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