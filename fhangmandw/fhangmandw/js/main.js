var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var words = ["fhdw", "informatik", "bwl", "dual", "studium", "bilanz", "gewinn", "javascript", "java", "software", "wirtschaft", "klausur", "office", "praxis", "dozent", "vorlesung", "semester", "consulting", "bachelor", "master", "immatrikulation", "theorie", "fachhochschule", "bewerbung", "sap", "netzwerk", "kolloquium", "business", "english", "thesis", "prozess", "rechnung", "unternehmen", "gmbh", "karriere", "management", "manager", "erfolg"];
var usedWords = [];
var usedLetters = [];
var word;
var lives = 4;
var tries = 8;
var points = 0;
var pick; //Buchstaben Wahl des Nutzers
var picks = []; //Alle ausgewählten Buchstaben des Nutzers
var correct = []; //Richtige picks
var letterFound = 0;
var joker = 3;
var muted = false;

//Sounds
var rightLetter = new Howl({urls: ['sounds/243701__ertfelda__correct.wav'], volume:0.2});
var rightWord = new Howl({ urls: ['sounds/109663__grunz__success-low.wav'], volume: 1 });
var wrong = new Howl({ urls: ['sounds/232444__afleetingspeck__game-over-sounds-1.wav'], volume: 1 });
var fail = new Howl({ urls: ['sounds/242503__gabrielaraujo__failure-wrong-action.wav'], volume: 1 });
var end = new Howl({ urls: ['sounds/133283__fins__game-over.wav'], volume: 1 });
var jokerSound = new Howl({ urls: ['sounds/116779__domrodrig__ringing-bell-happy.wav'], volume: 1 });
var mouseover = new Howl({ urls: ['sounds/166186__drminky__menu-screen-mouse-over.wav'], volume: 1 });

function init() {
    jQuery(function($){
        document.addEventListener("DOMContentLoaded", init, false);
        $("#joker").mouseover(function () {
            if (joker > 0) {
                mouseover.play();
            }
          });

        $("#joker").bind("click", function () {
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
                    $("#buttons ul li" + "#" + word[letterNumber]).addClass(" active");
                    $('#jplaceholder').html(joker);
                    wordComplete();
                }
                else if (joker === 0) {
                    $('#joker').addClass("active");
                    $('#joker').removeClass("jokerHover");
                    $('#imgJokerbutton').attr('src', "img/joke_off.png");
                }
            }
		});

			$('#off').bind("click", function () {
				if(!muted) {
					$('#off').attr('src', "img/speaker_off_button.png");
	            	muted = true;
	            	Howler.mute();
				}
				else {
	            	$('#off').attr('src', "img/speaker_on_button.png");
	            	muted = false;
	            	Howler.unmute();
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
            }
        }
    }
    else {
       	//Alert erfolgte in Methode fillSecret bei Array-Länge 0
    }
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
			//Vergabe einer ID für spätere Identifizierung bei checkLetter()
			$(abcEl).attr('id', letters[i]);
			//Klasse für Keyboards.js
			$(abcEl).addClass('abc');
			//Anhängen der Elemente an ul
			$("#buttons ul").append(abcEl);
		}
	});
}

//Active-Class aller Buchstaben entfernen
function removeActive() {
	jQuery(function($){
		for(var i = 0; i < letters.length; i++) {
			$("#buttons ul li.abc").removeClass("active");
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

//Active-Class bei Klick auf Buchstaben setzen und geklickten Buchstaben an checkLetter-Funktion geben 
function getPick() {
	jQuery(function($){
		$('ul#letterButton li.abc').click(function() {
			$(this).addClass("active");
			var pick = $(this).text();
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
			          //Nur einmalig eintragen
			          if(jQuery.inArray(userPick, correct) == -1) {
			          	correct.push(userPick);
			          	//Unterstrich durch richtigen Buchstaben aufdecken
			          	for(var a = 0; a < correct.length; a++) {
			          		$('ul#secretField li#'+correct[a]).text(correct[a]);
			          		rightLetter.play();
			          	}
			          	wordComplete();
			          }
			          var position = ++i;
			          //Array picks mit Funden füllen
			          picks.push(userPick);
				    }
			     }
				    if (letterFound == 0) {
				        tries--;
				        wrong.play();
				        $('#tplaceholder').html(tries);
				        if (tries == 0) {
				            revealWord();
				            lives--;
				            fhdwLife();				         
				            $("#secretField li").css("color", "#FF7901");
				            $("#secretField li").toggle("pulsate", { times: 6 }, 2000);
				            setTimeout(function () {
				                checkEndgame();
				                removeActive();
				                $('#lplaceholder').html(lives);
				                tries = 8;
				                $('#tplaceholder').html(tries);
                              }, 2000);
				        }
				    }
			     letterFound = 0;
				}
				else {
				    //Bereits ausprobierter Buchstabe wurde nochmal probiert.
				}
		});
	}

//Aufdecken des Wortes wenn man keine Tries mehr hat; noch nicht eingesetzt, weil noch an richtiger Stelle resetet werden muss
function revealWord() {
	for(var i = 0; i < word.length; i++) {
		$('ul#secretField li#'+word[i]).text(word[i]);
	}
}

//Prüft, ob ein Wort vollständig ist
function wordComplete() {
    var finds = 0;
    var wordArray = [];
    jQuery(function ($) {
        for (var i = 0; i < word.length; i++) {
            wordArray.push(word.charAt(i)); //Macht aus word-string das Array wordArray
        }
        /*wordArray und correct-Array Duplikate entfernen und sortieren*/
        wordArray = $.unique(wordArray);
        wordArray.sort();
        correct = $.unique(correct);
        correct.sort();

        if (JSON.stringify(correct) === JSON.stringify(wordArray)) {
            //Wort ist vollständig
            //picks und correct Array leeren
            rightWord.play();
            $("#secretField li").toggle("pulsate", { times: 4 }, 1500);
            setTimeout(function () {

                //Leeren der Arrays
                picks.length = 0;
                correct.length = 0;
                usedLetters.length = 0;

                //neues Wort + Striche generieren
                tries = 8;
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
		$("#fhdwLogo span#w" ).toggle("fade");
	}	
}

//Speichern der Punkte fuer die GameOver-Seite
function savePoints() {
	store.set('points', points);
}

function checkEndgame() {
    if (lives == 0 || words.length <= 0) {
        end.play();
        savePoints();
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