


//paralax

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4.4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 2.5 + '%)'
    });



    //portfolio
    if (wScroll > $('.portfolio').offset().top - 350) {
        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 500 * (i + 1));
        });

    }


});



$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


var $root = $('html, body');

$('a[href^="#home"]').click(function () {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top - 70
    }, 1500, 'easeInOutExpo', function () {
        window.location.hash = href;
    });

});
var $root = $('html, body');

$('a[href^="#about"]').click(function () {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top - 60
    }, 1250, 'easeInOutExpo', function () {
        window.location.hash = href;
    });

});
var $root = $('html, body');

$('a[href^="#portfolio"]').click(function () {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top - 30
    }, 1250, 'easeInOutExpo', function () {
        window.location.hash = href;
    });

});
var $root = $('html, body');

$('a[href^="#contact"]').click(function () {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top - 25
    }, 1250, 'easeInOutExpo', function () {
        window.location.hash = href;
    });

});