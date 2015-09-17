# FHDW Hangman
Ein auf der Idee von Hangman basierendes HTML5 Spiel. Diese Version beinhaltet das traditionelle Hangman-Spiel mit einem modernen, cartoon-artigen Design und orientiert sich mit der Farbauswahl an dem aktuellen Corporate Design der FHDW.

[Spiel starten](http://wip.esy.es/fhdwhangman)

[Webseite besuchen](http://wip.esy.es/)

## Entwickler
Die einzigen Entwickler dieses Projektes sind [Daniel zur Linden](https://github.com/Mastaa12) und [Edgar Klepek](https://github.com/edgarklepek42).

## Anleitung
Das Spiel kann sowohl per Maus, als auch per Tastatur im Internetbrowser bedient werden. Ziel des Spiels ist es, so viele Wörter wie möglich zu erraten. Es ist wichtig, genau zu überlegen, welchen Buchstaben man als nächstes wählt, denn in einem Leben hast du nur acht Fehlversuche. Insgesamt hast du vier Leben, repräsentiert durch die Buchstaben F,H,D und W. Solltest du ein Wort nicht erraten können, helfen dir die drei Joker, welche jeweils einen zufälligen Buchstaben aufdecken. Nach acht Fehlversuchen verlierst du ein Leben, das aktuelle Wort ist aus dem Spiel und ein neues Wort wird automatisch generiert. Hast du alle Leben aufgebraucht, kannst du dich in die Highscore-Liste eintragen und dich mit anderen Spielern vor dir vergleichen.

## Screenshots
### Menü
![alt tag](https://raw.githubusercontent.com/edgarklepek42/fhangmandw/master/fhangmandw/fhangmandw/screenshots/Gameplay01.PNG)
### Spiel
![alt tag](https://raw.githubusercontent.com/edgarklepek42/fhangmandw/master/fhangmandw/fhangmandw/screenshots/Gameplay03.PNG)
### Gameplay
![alt tag](https://raw.githubusercontent.com/edgarklepek42/fhangmandw/master/fhangmandw/fhangmandw/screenshots/gameplay.gif)

## Genutzte Bibliotheken/Plug-Ins/Schriftarten Dritter
* jQuery 1.11.3 (hosted by Google) (MIT License)
* jQuery UI 1.11.4 (hosted by Google) (MIT License)
* [Store.js](https://github.com/marcuswestin/store.js/) (MIT License)
* [howler.js](https://github.com/goldfire/howler.js) (MIT License)
* [SweetAlert](https://github.com/t4t5/sweetalert) (MIT License)
* Google Roboto Font (Apache License, version 2.0)
* Cabin Sketch Font (SIL open font license)

## Bilder/Icons
- Joker Icon erstellt von [Freepik](www.Freepik.com) über www.flaticon.com ([Autorennennung notwendig](http://support.flaticon.com/hc/en-us/articles/202798381-How-to-attribute-the-icons-to-their-authors))
- Spieleicons erstellt von [Mysitemyway](http://icons.mysitemyway.com) ([Keine Autorennennung notwendig](http://icons.mysitemyway.com/faqs/)) 

## Verwendete Sounds (www.freesound.org)
### [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- wrong action.wav by GabrialAraujo
- success_low.wav by grunz
- failfare.mp3 by Wagna
- Menu screen mouse over by DrMinky
- Xylophone-Cartton by sergeeo 

### [CC0 1.0](http://creativecommons.org/publicdomain/zero/1.0/deed.de)
- game over by fins
- correct by ertfeld
- Game over sounds 1 by afleetingspeck
- Ringing bell by domrodrig

## Anmerkungen/Konventionen
* Namenskonvention: CamelCase
* Funktionen- und Variablennamen auf Englisch
* Dokumentation und Textsprache im Spiel auf Deutsch
* Code: Fokus auf Lesbarkeit 

## Arbeitsteilung (grob)
#### Edgar:
* Highscores Funktionen und store.js Speicherung
* Mute-Funktionalität inkl. howler.js
* Grundfunktion createButtons
* removeActive-Funktion
* fillSecret-Funktion
* getPick-Funktion
* checkLetter-Grundfunktion
* fhdwLife-Funktion
* revealWord-Funktion

#### Daniel:
* Spielidee
* Joker
* Responsive Design CSS
* Versuche- und Lebenszähler in checkLetter (HUD)
* Tastatureingabe
* wordComplete-Funktion
* checkEndgame-Funktion
* Responsive Design on Refresh createButtons-Funktion

#### Beide:
* WordPress-Seite
* Pitcher
* HTML & Struktur
* Grundlegendes Design/Farbauswahl
* Tonauswahl & Integration
* Animationen
* Verbesserung bestehender Funktionen
* Suchen weiterer Libraries/Plug-Ins/Fonts

## Known Bugs
- Der Erfolgssound wird im Verlauf eines Wortes immer lauter

## Lizenz
FHDW Hangman ist unter der [MIT License](https://github.com/edgarklepek42/fhangmandw/blob/master/LICENSE) lizensiert.
