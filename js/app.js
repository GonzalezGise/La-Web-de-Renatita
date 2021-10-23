$(function () {

    $('.icono-menu').click(function () {

        $('nav ul').toggleClass("show")
    })

});


/* Lo anterior tambien lo puedo hacer así. El toggleClass es mas practico (una especie de On / Off)


if ($('nav ul').hasClass('show')) {
    $('nav ul').removeClass("show")
}
else {
    $('nav ul').addClass("show")
}

*/


