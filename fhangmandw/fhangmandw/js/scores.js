var schoolname = '';
var points;
var result = {school: schoolname, score: points};
var highscores = [];

function initStore() {
    if (!store.enabled) {
        alert('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
        return
    }
    //var schoolname = store.get('schoolname', 'Schule ABC'); // ('', '')
    // ... and so on ...
    //console.log(store.get('schoolname'));
}

function addHighscore() {
    schoolname = $('#school').text();   //Inhalt Form Element / User Eingabe
    //points = points;   					//Punkte aus game.html/main.js holen oder einbauen in main.js  // vlt. mit store.get(points)

    result = {school: schoolname, score: points}; //Befüllen mit aktuellem Ergebnis
    //localStorage.setItem('points', 'schoolname');
    highscores.push(gameResult); //Aktuelles Ergebnis zur Bestenliste hinzufügen
    //localStorage mit store.set();
    highscores.sort(function(x,y) { return (y.score - x.score ) });	//Sortieren der Ergebnisse evtl. anders

    $('#score1').text(highscores[0].player + " - Punkte: "+ highscores[0].score);
};