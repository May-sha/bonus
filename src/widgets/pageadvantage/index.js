

$(() => {
    $(".regular").slick({
        dots: true,
        dotsClass: 'advantage-dots slick-dots',
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });

    let currentSlide = 0;
    let currentIcon = 0;

    $('.pc-icon-wrapper .pc-icon').on('click', function(){
        let activeDomNormalSrc = $('.pc-icon.active img').attr('normal-src');
        $('.pc-icon.active').removeClass('active').find('img').attr('src', activeDomNormalSrc);

        let hoverSrc = $(this).find('img').attr('active-src');
        $(this).addClass('active').find('img').attr('src', hoverSrc);

        currentIcon = $(this).attr('index');
        if (currentSlide !== currentIcon) {
            $(`#slick-slide-control0${currentIcon}`).click();
        }
    });
    $($('.pc-icon-wrapper .pc-icon')[0]).click();

    if ($('.pc-icon-wrapper').width() > 0) {
        $('.regular').slick('slickSetOption', 'autoplay', false, true);
    }

    $(".regular").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        currentSlide = nextSlide;
        if (currentIcon !== currentSlide) {
            $($('.pc-icon-wrapper .pc-icon')[currentSlide]).click();
        }
    });
});