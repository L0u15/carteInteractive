jQuery(function ($) {
    // Choix de la map à afficher

    $('.carte-select').change(function () {
        if ($('.carte-select').val() === "enfant") {
            $('.mapAdulte').css("display","none");
            $('.mapEnfant').css("display","block");
        } else {
            $('.mapEnfant').css("display","none");
            $('.mapAdulte').css("display","block");
        }
    });


    $('.mapAdulte').append('<div class="overlay">').append('<div class="tooltip">Salut!</div>');
    $('.mapAdulte .tooltip').hide();
    //Data region
    var zones = [
        {name: 'En haut à gauche', slug: 'top-left'},
        {name: 'En haut à droite', slug: 'top-right'},
        {name: 'En bas à gauche', slug: 'down-left'},
        {name: 'En bas à droite', slug: 'down-right'}
    ];
    //Tooltip qui suit la souris
    $(document).mousemove(function (e) {
        $('.mapAdulte .tooltip').css({
            top: e.pageY - $('.mapAdulte .toopltip').height() - 25,
            left: e.pageX - $('.mapAdulte .toopltip').width() / 20 - 15
        });
    });

    //On met les liens sur les aréa
    $('.mapAdulte area').each(function () {
        var index = $(this).index();
        $(this).attr('href', 'http://google.com/?q=' + zones[index].slug);
    });

    //On passe sur une region
    $('.mapAdulte area').mouseover(function () {
        var index = $(this).index();
        var left = -index * 400 - 400;
        $('.mapAdulte .tooltip').html(zones[index].name).stop().fadeTo(500, 1);
        $('.mapAdulte .overlay').css({
            backgroundPosition: left + "px 0px"
        });
    });
    //Onsort de la map
    $('.mapAdulte').mouseout(function () {
        $('.mapAdulte .overlay').css({
            backgroundPosition: "400px"
        });
        $('.mapAdulte .tooltip').stop().fadeTo(300, 0);
    });
});


