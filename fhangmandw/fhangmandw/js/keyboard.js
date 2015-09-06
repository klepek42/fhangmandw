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
            break;
            case 'B':
            break;
            case 'C':
            break;
            case 'D':
            break;
            case 'E':
            break;
            case 'F':
            break;
            case 'G':
            break;
            case 'H':
            break;
            case 'I':
            break;
            case 'J':
            break;
            case 'K':
            break;
            case 'L':
            break;
            case 'M':
            break;
            case 'N':
            break;
            case 'O':
            break;
            case 'P':
            break;
            case 'Q':
            break;
            case 'R':
            break;
            case 'S':
            break;
            case 'T':
            break;
            case 'U':
            break;
            case 'V':
            break;
            case 'W':
            break;
            case 'X':
            break;
            case 'Y':
            break;
            case 'Z':
            break;
            default: alert("Bitte nur Buchstaben (keine Umlaute!) eingeben!"); 
                break;
           }
       }
    );
}