# DOCUMENTATION

## HTML

### index.html

### game.html

### instructions.html?

### scores.html ?


## CSS

### main.css


## JavaScript

### main.js

#### letters
Array mit dem Alphabet (Grundbuchstaben)
#### words
Array aller verfügbarer Wörter
#### word
Das per Zufall ausgewählte Ratewort
#### lives
Übrige Leben bis zum Spielende
#### points
Aktueller Stand der erreichten Punkte
#### randomWord()
Eine Funktion zur Auswahl eines zufälligen Wortes aus dem "words" Array.
Dabei wird in Abhängigkeit der Wortanzahl im "words" Array gewürfelt.
Der Zufall wird mittels der Standard JavaScript Funktion Math.floor(Math.random()) realisiert.
#### createButtons()
Eine Funktion zur Erzeugung der Alphabet Tastatur (kurz: ABC-Tastatur).
Es wird das Array "letters" durchgegangen, um über alle Buchstaben zu iterieren und je ein li Element erzeugt und an die unordered list "buttons" angehängt.
Umsätzung mittels jQuery append() Funktion und einer FOR-Schleife.
#### fillSecret()
Eine Funktion zur Erzeugung des Ratewortfelds. Dieser Bereich soll das geheime Wort darstellen.
Mittels einer FOR-Schleife in Abhängigkeit der Ratewortlänge werden dementsprechend viele Unterstriche erzeugt und an die unordered list "area" angehängt.
Via jQuery wird wieder die append() Funktion verwendet.
#### checkLetter()
