//Funktion zur Prüfung von Tastatureingaben
function checkKeyboard() {
    $(document).keydown(
        function (event)
        {
            var key = String.fromCharCode(event.keyCode);
            key.toUpperCase();
            switch (key)
            {
                case 'A':
                case 'B':
                case 'C':
                case 'D': 
                case 'E':
                case 'F':
                case 'G':
                case 'H':
                case 'I':
                case 'J':
                case 'K':
                case 'L':
                case 'M':
                case 'N':
                case 'O':
                case 'P':
                case 'Q':
                case 'R':
                case 'S':
                case 'T':
                case 'U':
                case 'V':
                case 'W':
                case 'X':
                case 'Y':
                case 'Z':
                    jQuery(function($){
                        checkLetter(key.toLowerCase());
                        $("#buttons ul li" + "#" + key.toLowerCase()).addClass("active");
                    });
                    break;
                default: // Alles was kein Grundbuchstabe ist, wird ignoriert.
                    break;
            }
        }
    );
}