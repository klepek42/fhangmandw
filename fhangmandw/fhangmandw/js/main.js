var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ["fhdw", "informatik", "bwl", "dual", "studium", "finanzmathematik", "bilanz", "guv", "gewinn", "javascript", "java", "software", "wirtschaft", "klausur", "praesentation", "office", "praxis"];
var usedWords = [];
var usedLetters = [];
var word;
var lives = 4;
var tries = 6;
var points = 0;
var pick; //Buchstaben Wahl des Nutzers
var picks = []; //Alle ausgewählten Buchstaben des Nutzers
var correct = []; //Richtige picks
var gameover;
var letterFound = 0;
var joker = 3;

//Local Highscores TEST; könnte komfortabeler sein; am Ende dann einblenden statt Seitenwechsel
var schoolname;
var highscores = [];

//Sounds
var button = AudioFX('sounds/BounceYoFrankie.mp3', { pool: 10 });
var rightLetter = AudioFX('sounds/110390__soundscalpel-com__cartoon-siren-whistle-001.wav', { pool: 10 });
var rightWord = AudioFX('sounds/109663__grunz__success-low.wav', { pool: 10 });
var wrong = AudioFX('sounds/142608__autistic-lucario__error.wav', { pool: 10 });
var fail = AudioFX('sounds/242503__gabrielaraujo__failure-wrong-action.wav', { pool: 10 });
var end = AudioFX('sounds/133283__fins__game-over.wav', { pool: 10 });

/*$(window).resize(deleteButtons);
$(window).resize(createButtons);*/

function init() {
    jQuery(function($){
        document.addEventListener("DOMContentLoaded", init, false);

        $("#sound").bind("click", function () {
            $("#off").attr('src', "img/speaker_off_button.png");
        });
    });
}
init();

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
function createButtons() {
    jQuery(function ($) {
        var browserWidth = $( window ).width();
        //950px = 13 - 1 Buchstabe benötigt ca. 75 px


		for(var i = 0; i < letters.length; i++) {
		    //Umbruch bzw. einstellen der Tastatur
		    
		    if (browserWidth > 860 && i == 13)
		    {
		        $("#buttons ul").append('<br/>');
		    }
		    else if (browserWidth > 675 && browserWidth < 860 && i % 9 == 0)
		    {

                    $("#buttons ul").append('<br/>');		        
		    }
		    else if (browserWidth > 500 && browserWidth < 675 && i % 7 == 0) {
		            $("#buttons ul").append('<br/>');
		    }
		    else if (browserWidth > 350 && browserWidth < 500 && i % 5 == 0) {
		        $("#buttons ul").append('<br/>');
		    }


			//Einsetzen aller Buchstaben in Variable
			var letter = letters[i];
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

/*function deleteButtons() {
    jQuery(function ($) {
        for (var i = 0; i < letters.length; i++) {
            var letter = letters[i];
            var abcEl = $('<li>' + letter + '</li>');
          $(abcEl).removeAttr('id', 'abc');
          $(abcEl).removeClass(letters[i]);
            $("#buttons ul").remove();
        }
    });
}*/

function removeActive() {
	jQuery(function($){
		for(var i = 0; i < letters.length; i++) {
			$("#buttons ul li#abc").removeClass("active");
		}
	});
}

//Befüllen des Ratefelders mit Elementen in Abhängigkeit der Wortlänge
function fillSecret() {
	jQuery(function($){
	//Reset fuer "nächstes Wort"
	    $("#area ul").empty();

	    if (words.length > 0) {
	        for (var j = 0; j < word.length; j++) {
	        	var secretEl = $('<li>_</li>')
	        	//Vergabe einer id für spätere Prüfung
				$(secretEl).attr('id', word[j]);
	            //Erstelle so viele Unterstriche wie die Wortlänge
	            $("#area ul").append(secretEl);
	        }
	    }
	    else {
	    	checkEndgame();
	    }
	});
}

function getPick() {
	jQuery(function($){
		$('ul#letterButton li#abc').click(function() {
			//button.play();
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
function checkLetter(userPick) {
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
							rightLetter.play();
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
				        wrong.play();
				        $('#tplaceholder').html(tries);
				        console.log("Tries: " + tries);

				        //Eigene Funktion daraus machen?
				        if (tries == 0) {
				            lives--;
				            removeActive();
				            fhdwLife();
				            revealWord();
				            $('#lplaceholder').html(lives);
				            tries = 6;
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
function wordComplete() {
	var finds = 0;
	jQuery(function($){
		for(var i = 0; i < word.length; i++) {
			if($('ul#secretField li#'+word[i]).text() == '_') {
				finds++;
			}
		}
		//Wort ist vollständig
		if (finds == 0) {
            //picks und correct Array leeren
			picks.length = 0;
			correct.length = 0;
			usedLetters.length = 0;

            //neues Wort + Striche generieren
			tries = 6;
			$('#tplaceholder').html(tries);
			randomWord();
			removeActive();
			fillSecret();
			rightWord.play();

		    //Punktevergabe
			points++;
			$('#pplaceholder').html(points);
		}
	});
}

//Steuerung der Lebensanzeige (FHDW Logo)
function fhdwLife() {
	//Von Anfang an alle spans bzw. das ganze div disablen
	if(lives == 3) {
		$("#fhdwLogo span#f" ).toggle( "fade" );
		fail.play();
	}
	else if(lives == 2) {
		$("#fhdwLogo span#h" ).toggle( "fade" );
		fail.play();
	}
	else if(lives == 1) {
		$("#fhdwLogo span#d" ).toggle( "fade" );
		fail.play();
	}
	else if(lives == 0) {
		console.log("fhdwLife togglet");
		$("#fhdwLogo span#w" ).toggle( "fade" );
	}	
}

//Auslesen des localStorage und speichern in einer Variable
function loadStore() {
	//Notwendig?
	store.get('highscores');
	//Highscores Array aktualisieren
	highscores = store.get('highscores');
	console.log("highscores: " + highscores);
}

//Abspeichern in localStorage via store.js
function saveStore() {
	store.set('highscores', highscores);
	console.log("Highscores saved to Store");
}

//Muss ueber checkNewHighscore()
function highscorePrompt(pos) {
	schoolname = prompt("Neuer Highscore! Gib den Namen deiner Schule ein!");
	addScore(pos,schoolname);
}

//Aufbauen der Liste mit bestehenden Highscores
function createHighscorelist() { //evtl highscore übergeben
	jQuery(function($){
		$("#highscores").empty();
		loadStore();
		var y = 4;

		for(var i = 0; i < 5; i++) {
			y++;
			var entry = $('<li id="entry"><span id="'+i+'" class="score">' + highscores[i] + '</span> <span id="'+y+'" class="schoolname">' + highscores[y] + '</span></li><br/>');
			$("#highscores").append(entry);
		}
	});
	console.log("createHighscorelist()");
}

//Pruefen ob der neue Score in die Highscoreliste gehoert
function checkNewHighscore() {
	//Durchlaufen der Highscoreliste und Points gegenchecken
	var pos = 4;
	var i = 4;
	var achievedPoints = points;

	console.log(highscores[4]);
	console.log("Beginne Positonssuche");

	//Wenn Wert groeßer als der kleinste in der Liste also highscores[4]
	if(achievedPoints > highscores[4]) {
		i--;
		//Suchen der Position
		console.log("Neuer Highscore");
		console.log(highscores[i]);
		while(achievedPoints > highscores[i]) {
			i--;
			pos--;
		}
		console.log("Position gefunden. Ergebnis = " + pos);
		highscorePrompt(pos);
	}
	else {
		alert("Kein neuer Highscore");
	}
}

//Hinzufuegen eines neuen Scores zur Highscoreliste
function addScore(pos,schoolname) {
	console.log("pos: " + pos);
	var punkte = points;
	var name = schoolname;

	//Fuege Ergebnis an ermittelte Position und verschiebe
	highscores.splice(pos+5, 0, name);
	highscores.pop();
	highscores.splice(pos, 0, punkte);
	highscores.splice(pos+1, 1);
	console.log("speichere highscore: " + highscores);
	saveStore();
	createHighscorelist();
	console.log("added score at " + pos);
}

function checkEndgame() {
    if (lives == 0 || words.length <= 0) {
        $('#tplaceholder').html('0');
		end.play();
		setTimeout(function(){ checkNewHighscore(); }, 500);
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