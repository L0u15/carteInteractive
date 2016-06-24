(function ($) {
    function afficheMapEnfant() {
        $('#map_adultes').css("display", "none");
        $('#map_enfant').css("display", "block");
    }
    function afficheMapAdulte() {
        $('#map_enfant').css("display", "none");
        $('#map_adultes').css("display", "block");
    }
    function afficheMap(map) {
        if (map === "enfant") {
            afficheMapEnfant();
        } else {
            afficheMapAdulte();
        }
    }
    jQuery(function ($) {
        $valeur = $("#choix_categorie").val();
        $('.form-select').change(function () {
            $valeur = $("#choix_categorie").val();
            afficheMap($valeur);
        });
        afficheMap($valeur);
    });
})(jQuery);