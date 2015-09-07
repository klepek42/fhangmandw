//Funktion zur Prüfung von Tastatureingaben
function checkKeyboard()
{
    $(document).keydown(
        function (event)
        {
        var key = String.fromCharCode(event.keyCode);
        console.log("Key: " + key);
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
                checkLetter(key.toLowerCase());
                break;
            default: alert("Bitte nur Buchstaben (keine Umlaute!) eingeben!");
                break;
           }
       }
    );
}