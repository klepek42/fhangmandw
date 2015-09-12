# CHANGELOG

## Version 1.6 (Edgar)
- Highscore Funktionen und store.js implementiert

## Version 1.5.8.6 (Daniel)
- Joker-Button hinzugefügt und implementiert (Erstfassung)

## Version 1.5.8.5 (Daniel)
- init-Funktion & Eventhandler in main.js hinzugefügt

## Version 1.5.8.4 (Daniel)
- HUD etwas per CSS angepasst

## Version 1.5.8.3 (Daniel)
- Animationen im Hauptmenü eingefügt

## Version 1.5.8.2 (Edgar)
- In game.html <img> Tags eingefügt
- Einbinden von Bildern für Versuche und Punkte
- Auswahl an passenden Icons im img Folder platziert
- Sound an/aus Button überarbeitet

##Version 1.5.8.1 (Daniel)
- Responsive Design Hauptmenü
- Direct Responsive Design für Break in main.js (auskommentiert, weil verbuggt)

## Version 1.5.8 (Daniel)
- Integrierung erste Ansätze Responsive Design (main.css & game.js)

## Version 1.5.7.5 (Daniel)
- Versuch des dynamischen Umbrechens der Alphabet-Reihe

## Version 1.5.7.4 (Daniel)
- kleine Style Anpassungen

## Version 1.5.7.3 (Edgar)
- Kleine Anpassungen, loadStore() implentiert

## Version 1.5.7.2 (Daniel)
- Visual Studio Ansicht angepasst :)

## Version 1.5.7.1 (Edgar)
- Neue Sounds für Gameover und rightWord hinzugefügt
- Unnötige Kommentare entfernt
- Das "W" des FHDW Lebens wird jetzt korrekt gerendert

## Version 1.5.7 (Edgar)
- Sounds und Library audio-fx.js hinzugefügt
- Initiale Skripte für index.html und für game.html ausgelagert
- Ordner für Bilder und Sounds erstellt
- Sounds gesucht und eingefügt
- Leben auf 6 runtergesetzt

## Version 1.5.6.2 (D + E)
- Style angepasst

## Version 1.5.6.1 (D + E)
- Style angepasst

## Version 1.5.6 (D + E)
- Style angepasst

## Version 1.5.5.4 (Edgar)
- loadHighscores() fertig implementiert
- createHighscorelist(r,h) fertig implementiert
- checkNewHighscore(achievedPoints) fertig implementiert

## Version 1.5.5.3 (Edgar)
- etwas einkommentiert

## Version 1.5.5.2 (Edgar)
- Highscore Logik weitgehend umgesetzt

## Version 1.5.5.1 (Edgar)
- Lokale Highscoreliste integriert

## Version 1.5.5 (Edgar)
- Tastatureingaben grauen jetzt auch die Buttons aus
- Reset für ausgegraute Buttons behoben

## Version 1.5.4.4 (Edgar)
- setzen von active class beim Klick eines Buchstaben + disabled Effekt
- removeActive() zum löschen von disabled Buttons (active class)
- Einbau einer lokalen Highscoreliste (nicht fertig)
- in createButton() eine Möglichkeit zum umbrechen der Tastatur geschaffen if(i % x == 0)

## Version 1.5.4.3 (Edgar)
- Kleinigkeiten, revealWord(), fhdwLife(), savePoints() und das FHDW Logo als Leben

## Version 1.5.4.2 (Daniel)
- Mini Anpassung

## Version 1.5.4.1 (Daniel)
- usedLetters in wordComplete() leeren

## Version 1.5.4 (Daniel)
- Array usedLetters hinzugefügt
- checkLetter damit erweitert, dass nun nur Versuche abgezogen werden, wenn Buchstabe noch nie gewählt

## Version 1.5.3.1 (Daniel)
- 1 s Timeout in checkEndgame() eingefügt, damit der Versuche-Platzhalter vor Wechsel auf die Gameover-Seite noch auf 0 gesetzt wird

## Version 1.5.3 (Daniel)
- Punkte und Lebensvergabe fertiggestellt
- Funktion checkEndgame() integriert
- Weiterleitung auf Gameover-Seite korrigiert

## Version 1.5.2 (Edgar)
- Punkte, Leben, Gameover etwas überarbeitet
- Leben werden bei 0 Versuchen abgezogen
- Tries werden abgezogen, aber hat noch nen Bug. Sobald ein richtiger Buchstabe gefunden wurde, bleiben die tries unverändert

## Version 1.5.1.2 (Edgar)
- Erster Versuch die Highscores einzubauen. store.js angepeilt.

## Version 1.5.1.1 (Daniel)
- Erster Versuch, die Leben noch zu integrieren

## Version 1.5.1 (Daniel)
- einfache Punktlogik implementiert
- game.html points-Textfeld von p- zu span-Element verändert wegen Punktevergabe

## Version 1.5 (Daniel)
- Workover wordComplete: Arrays picks und correct werden bei fertigem Wort geleert + randomWord()/fillSecret() Aufruf hinzugefügt
- keyboard.js: Tastatureingabe fertiggestellt, ergänzte breaks wieder gelöscht :)
- checkLetter() Debug-if auskommentiert

## Version 1.4.9 (Edgar)
- Refactoring von checkLetter(): aufsplitten in die zusätzliche Funktion getPick() um für die Tastatur verfügbar zu sein

## Version 1.4.8 (Edgar)
- wordComplete() implementiert

## Version 1.4.7 (Edgar)
- checkLetters() fertig implementiert

## Version 1.4.6 (Edgar)
- Verbesserung von checkLetter(), jedes Unterstrich li Element hat jetzt eine ID in Abhängigkeit des Geheimworts

## Version 1.4.5 (Edgar)
- Funktion checkLetter() teilweise implementiert, es fehlt das Feintunning
- Erstellung neuer Variablen wie z.B. pick und picks Array
- Verbesserung von createButtons() und fillSecret() -> jetzt werden auch IDs für die Elemente vergeben

## Version 1.4.4 (Edgar)
- keyboard.js cases um breaks ergänzt
- Game Over Seite grob erstellt

## Version 1.4.3 (Daniel)
- keyboard.js hinzugefügt
- checkKeyboard() Grundgerüst erstellt

## Version 1.4.2 (Daniel)
- Eventlistener in game.html implementiert

## Version 1.4 (Edgar&Daniel)
- Funktion randomWord verbessert: bereits genutztes Wort wird aus Array entfernt und in "Papierkorb-Array" usedWords verschoben
- Funktion randomWord/fillSecret: Verhinderung von Errors bei leerem Wörter-Array durch if-Verzweigung und Alert
- kleinere Anpassung in CSS


## Version 1.3 (Edgar)
- ABC-Tastatur mittels jQuery umgesetzt
- Erzeugen des Ratewortfelds in Abhängigkeit des Zufallsworts
- Funktion createButtons()
- Funktion fillSecret()
- Mehr Wörter zum Wörter Array hinzugefügt

## Version 1.2 (Edgar)
- Funktion randomWord() zur Wahl eines Zufallsworts
- Gestaltung und Aufbau der ABC-Buttons
- Gestaltung der Ratewortfelds

## Version 1.10
- Neue Schriftart "Roboto" von Google zum Testen hinzugefügt (Steht unter Apache Licence)
- Gamelogik und Struktur grob erstellt
- Gameoptik etwas angepasst

## Version 1.1 (Daniel)
- main.css erstellt
- Menü gestaltet
- eventListener für das Menü

## Version 1 (Daniel)
- Initiales einchecken
