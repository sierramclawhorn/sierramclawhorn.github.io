var aniPotato = function($aniPotato,speed){


    $aniPotato.animate({
        "left": "110%"
    }, speed);
};

$(function(){
    aniPotato($(".aniPotato"), 9000);
});