function init() {
    jQuery(function($){
        document.addEventListener("DOMContentLoaded", init, false);
        var mouseover = new Howl({urls: ['sounds/166186__drminky__menu-screen-mouse-over.wav']});
        var click = new Howl({urls: ['sounds/202576__sergeeo__xylophone-for-cartoon-2.wav']});

        $(".menu").mouseover(function() {
            mouseover.play();
        });

        $("#startGame").bind( "click", function() {
            click.play();
            $("#divMain").toggle("fade");
            $("#startGame").toggle("highlight", { color: '#FF7901' }, 1000);
            setTimeout(function () {
                location.href = 'game.html';
            }, 500);
            
        });

        $("#scores").bind( "click", function() {
            click.play();
            $("#divMain").toggle("fade");
            $("#scores").toggle("highlight", { color: '#FF7901' }, 1000);
            setTimeout(function () {
                location.href = 'scores.html';
            }, 500);
        });

        $("#instruction").bind( "click", function() {
            click.play();
            $("#divMain").toggle("fade");
            $("#instruction").toggle("highlight", { color: '#FF7901' }, 1000);
            setTimeout(function () {
                location.href = 'instructions.html';
            }, 500);
        });

        $('#attribution').click(function() {
            swal({   
                title: "<h1>Credits</h1>",   
                text: "<h2>freesound.org / CC BY 3.0</h2><ul><li>wrong action.wav by GabrialAraujo</li><li>success_low.wav by grunz</li><li>failfare.mp3 by Wagna</li><li>Menu screen mouse over by DrMinky</li><li>Xylophone-Cartton by sergeeo</li></ul><h2>CC0 1.0</h2><ul><li>game over by fins</li><li>correct by ertfeld</li><li>Game over sounds 1</li><li>Ringing bell by domrodrig</li></ul><h2>flaticon.com</h2><ul><li>Joker Icon made by http://www.freepik.com <br/> from www.flaticon.com</li></ul>",   
                html: true })
        });
    });
}

init();