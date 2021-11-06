var mySwiper = new Swiper ('.swiper-container', {
	speed: 2000,
	loop: true,
	autoplay: {
        delay: 2000,
        waitForTransition: true,
        disableOnInteraction: false,
    },
	flipEffect: {
        rotate: 30,
        slideShadows: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
            return '<span class="' + className + '">'+'<svg class="fp-arc-loader" width="24" height="24" viewBox="0 0 24 24">'+
                '<circle class="path" cx="4" cy="1" r="11" fill="none" transform="rotate(-90 4 1)" stroke="#235abd"'+
                'stroke-opacity="1" stroke-width="1.5px"></circle>'+
                //'<circle cx="12" cy="12" r="7" fill="#1d1d1d"></circle>'+
                '<circle class="path" cx="4" cy="1" r="5" fill="#235abd" transform="rotate(-90 4 1)"'+
                '</svg></span>';
        },

    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

var complSwiper = new Swiper ('.complication-swiper-container', {
	slidesPerView: '1.45',
    initialSlide: 3,
    speed: 2000,
    spaceBetween: 13,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
	autoplay: {
        delay: 2000,
        waitForTransition: true,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.complication-swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
            return '<span class="' + className + '">'+'<svg class="fp-arc-loader" width="24" height="24" viewBox="0 0 24 24">'+
                '<circle class="path" cx="4" cy="1" r="11" fill="none" transform="rotate(-90 4 1)" stroke="#235abd"'+
                'stroke-opacity="1" stroke-width="1.5px"></circle>'+
                //'<circle cx="12" cy="12" r="7" fill="#1d1d1d"></circle>'+
                '<circle class="path" cx="4" cy="1" r="5" fill="#235abd" transform="rotate(-90 4 1)"'+
                '</svg></span>';
        },

    },

    // Navigation arrows
    navigation: {
      nextEl: '.complication-swiper-button-next',
      prevEl: '.complication-swiper-button-prev',
    },
})

$(document).ready(function() {

    //FAQ
    $('.popular__btn').on('click', function() {
      $(this).toggleClass('active');
    $(this).parent().find('.more').slideToggle();
    });

});
