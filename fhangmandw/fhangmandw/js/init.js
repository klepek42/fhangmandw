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

        
    });
}

init();