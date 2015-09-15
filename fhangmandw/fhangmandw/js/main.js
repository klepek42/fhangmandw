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
var muted = false;

//Local Highscores TEST
var schoolname;
var highscores = [];

//Sounds
var button = new Howl({ urls: ['sounds/BounceYoFrankie.mp3'], volume: 1 });
var rightLetter = new Howl({urls: ['sounds/243701__ertfelda__correct.wav'], volume:0.2});
var rightWord = new Howl({ urls: ['sounds/109663__grunz__success-low.wav'], volume: 1 });
var wrong = new Howl({ urls: ['sounds/232444__afleetingspeck__game-over-sounds-1.wav'], volume: 1 });
var fail = new Howl({ urls: ['sounds/242503__gabrielaraujo__failure-wrong-action.wav'], volume: 1 });
var end = new Howl({ urls: ['sounds/133283__fins__game-over.wav'], volume: 1 });
var jokerSound = new Howl({ urls: ['sounds/116779__domrodrig__ringing-bell-happy.wav'], volume: 1 });
var mouseover = new Howl({ urls: ['sounds/166186__drminky__menu-screen-mouse-over.wav'], volume: 1 });


/*
$(window).resize(deleteButtons());
$(window).resize(createButtons);
*/
function init() {
    jQuery(function($){
        document.addEventListener("DOMContentLoaded", init, false);


        $("#joker").mouseover(function () {
            mouseover.play();
        });

        $("#joker").bind("click", function () {
            jQuery(function ($) {

                var letterNumber = Math.floor(Math.random() * word.length);

                    while ($.inArray(word[letterNumber], correct) != -1) {
                        letterNumber = Math.floor(Math.random() * word.length);
                    }


                for (var i = 0; i < word.length; i++) {
                    if (i === letterNumber && joker > 0) {
                        $('ul#secretField li#' + word[letterNumber]).text(word[letterNumber]);
                        jokerSound.play();
                        joker--;
                        picks.push(word[letterNumber]);
                        correct.push(word[letterNumber]);
                        usedLetters.push(word[letterNumber]);
                        $("." + word[letterNumber]).addClass("active");
                        $('#jplaceholder').html(joker);
                        wordComplete();
                    }
                    else if (joker === 0) {
                        $('#joker').prop('disabled', true);
                    }
                }
            });
        });

			$('#off').bind("click", function () {
				if(!muted) {
					$('#off').attr('src', "img/speaker_off_button.png");
	            	muted = true;
	            	Howler.mute();
	            	console.log("muted = true");
				}
				else {
	            	$('#off').attr('src', "img/speaker_on_button.png");
	            	muted = false;
	            	Howler.unmute();
	            	console.log("muted = false");
				}
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
		    
		    if (browserWidth > 1050 && i == 13)
		    {
		        $("#buttons ul").append('<br/>');
		    }
		    else if (browserWidth > 675 && browserWidth < 1050 && i % 9 == 0)
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
/*
function deleteButtons() {
    jQuery(function ($) {
        $("#buttons").empty();
    });
}
*/
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
    var wordArray = [];
    jQuery(function ($) {
        for (var i = 0; i < word.length; i++) {
            wordArray.push(word.charAt(i));

        }

        wordArray = $.unique(wordArray);
        wordArray.sort();
        correct = $.unique(correct);
        correct.sort();
        console.log("Wordarray: " + wordArray);
        console.log("Correct-Array: " + correct);


        if (JSON.stringify(correct) === JSON.stringify(wordArray)) {
            //Wort ist vollständig
            //picks und correct Array leeren
            rightWord.play();
            $("#secretField li").toggle("pulsate", { times: 4 }, 1500);
            setTimeout(function () {

                picks.length = 0;
                correct.length = 0;
                usedLetters.length = 0;

                //neues Wort + Striche generieren
                tries = 6;
                $('#tplaceholder').html(tries);
                randomWord();
                removeActive();
                fillSecret();


                //Punktevergabe
                points++;
                $('#pplaceholder').html(points);
            }, 1500);

        }
    });
}


//Steuerung der Lebensanzeige (FHDW Logo)
function fhdwLife() {
	//Von Anfang an alle spans bzw. das ganze div disablen
	if(lives == 3) {
		$("#fhdwLogo span#f" ).toggle("fade");
		fail.play();
	}
	else if(lives == 2) {
		$("#fhdwLogo span#h" ).toggle("fade");
		fail.play();
	}
	else if(lives == 1) {
		$("#fhdwLogo span#d" ).toggle("fade");
		fail.play();
	}
	else if(lives == 0) {
		console.log("fhdwLife togglet");
		$("#fhdwLogo span#w" ).toggle("fade");
	}	
}

//Auslesen des localStorage und speichern in einer Variable
function loadStore() {
	if(store.get('highscores') == undefined) {
		store.set('highscores', [5,4,3,2,1,'Gymnasium Hochdahl','Gymnasium am Neanderthal','Berufskolleg Hilden','Gymnasium Ratingen','FHDW Mettmann'])
		highscores = [5,4,3,2,1,'Gymnasium Hochdahl','Gymnasium am Neanderthal','Berufskolleg Hilden','Gymnasium Ratingen','FHDW Mettmann'];
	}
	else {
		highscores = store.get('highscores');
	}
}

//Abspeichern in localStorage via store.js
function saveStore() {
	store.set('highscores', highscores);
	console.log("Highscores saved to Store");
}

//Speichern der Punkte fuer die GameOver-Seite
function savePoints() {
	store.set('points', points);
	console.log("Saved " + points + " points");
}

//Muss ueber checkNewHighscore()
function highscorePrompt(pos) {
	schoolname = prompt("Neuer Highscore! Gib den Namen deiner Schule ein!");
	if(schoolname == null) {
		schoolname = 'Unbekannt';
	}
	addScore(pos,schoolname);
	console.log("Rufe addScore auf mit " + pos + " und " + schoolname);
}

//Aufbauen der Liste mit bestehenden Highscores
function createHighscorelist() {
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
function checkNewHighscore(points) {
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
	console.log("addScore points: " + punkte);

	//Fuege Ergebnis an ermittelte Position und verschiebe
	highscores.splice(pos+5, 0, name);
	highscores.pop();
	highscores.splice(pos, 0, punkte);
	highscores.splice(pos+1, 1);
	saveStore();
	createHighscorelist();
}

function checkEndgame() {
    if (lives == 0 || words.length <= 0) {
        $("#secretField li").css("color", "#FF7901");
        $("#secretField li").toggle("pulsate", { times: 8 }, 3000);
        end.play();
        savePoints();
        setTimeout(function () {
            revealWord();
            $('#tplaceholder').html('0');
            window.location.href = 'gameover.html';
        }, 3000);

    }
    else {
			picks.length = 0;
			correct.length = 0;
			usedLetters.length = 0;
			randomWord();
			fillSecret();
    }
}
