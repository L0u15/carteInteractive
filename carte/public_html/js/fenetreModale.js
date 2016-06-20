$(document).ready(function () {
    $("#open_f").click(function () {
        $(".arr_plan, .f_modale").css("display", "block");
        $(".arr_plan").animate({'opacity': '.5'}, 350);
        $(".f_modale").animate({'opacity': '1'}, 350);
    });
    $(".arr_plan,.fermer").click(function () {
        $(".arr_plan, .f_modale").animate({'opacity': '0'}, 350,
                function () {
                    $(".arr_plan, .f_modale").css("display", "none");
                }
        );
    });
});