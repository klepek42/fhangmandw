var newHighscore = new Howl({ urls: ['sounds/270404__littlerobotsoundfactory__jingle-achievement-00.wav'], volume: 1});
var noHighscore = new Howl({ urls: ['sounds/242208__wagna__failfare.mp3'], volume: 1});

//Auslesen des localStorage und speichern in einer Variable
function loadStore() {
    if(store.get('highscores') == undefined) {
        store.set('highscores', [6,4,2,2,1,'Gymnasium Hochdahl','Gymnasium am Neandertal','Berufskolleg Hilden','Dietrich Bonhoeffer Gymnasium','Lore-Lorentz Schule'])
        highscores = [6,4,2,2,1, 'Gymnasium Hochdahl','Gymnasium am Neandertal','Berufskolleg Hilden','Dietrich Bonhoeffer Gymnasium','Lore-Lorentz Schule'];
    }
    else {
        highscores = store.get('highscores');
    }
}

//Abspeichern in localStorage via store.js
function saveStore() {
    store.set('highscores', highscores);
}

//Muss ueber checkNewHighscore()
function highscorePrompt(pos) {
    var points = store.get('points');
    schoolname = swal({
        title: "Neuer Highscore!",
        text: "Gib den Namen deiner Schule ein!",
        type: "input",
        closeOnConfirm: true,
        animation: "pop",
        inputPlaceholder: "Schulname",
        confirmButtonColor: "#013668",
        imageUrl: "img/joke.png"
    },
    function(schoolname) {
        if (schoolname === false) return false;
        if (schoolname != false) {
            addScore(pos,schoolname);
        }
    });
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
}

//Pruefen ob der neue Score in die Highscoreliste gehoert
function checkNewHighscore(points) {
    //Durchlaufen der Highscoreliste und Points gegenchecken
    var pos = 4;
    var i = 4;
    var achievedPoints = points;

    //Wenn Wert groeßer als der kleinste in der Liste also highscores[4]
    if(achievedPoints > highscores[4]) {
        i--;
        //Suchen der Position
        newHighscore.play();
        while(achievedPoints > highscores[i]) {
            i--;
            pos--;
        }
        highscorePrompt(pos);
    }
    else {
        noHighscore.play();
        swal("Kein neuer Highscore", "", "error");
    }
}

//Hinzufuegen eines neuen Scores zur Highscoreliste
function addScore(pos,schoolname) {
    var punkte = store.get('points');
    var name = schoolname;

    //Fuege Ergebnis an ermittelte Position und verschiebe
    highscores.splice(pos+5, 0, name);
    highscores.pop();
    highscores.splice(pos, 0, punkte);
    highscores.splice(pos+1, 1);
    saveStore();
    createHighscorelist();
    //Score zuruecksetzen
    store.set('points', 0);
}