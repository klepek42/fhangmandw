# CHANGELOG

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
