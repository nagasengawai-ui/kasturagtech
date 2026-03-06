$(document).ready(function () {

```
/* =============================
   Mobile Menu Toggle
============================= */
$('.fa-bars').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});

/* =============================
   Header Scroll Effect
============================= */
$(window).on('scroll load', function () {

    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if ($(window).scrollTop() > 35) {
        $('.header').css({
            'background': '#002e5f',
            'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'
        });
    } else {
        $('.header').css({
            'background': 'none',
            'box-shadow': 'none'
        });
    }
});

/* =============================
   Counter Animation
============================= */
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {

    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = Math.ceil(target / speed);

        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

/* =============================
   Clients Carousel
============================= */
$(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    margin: 20,
    responsive: {
        0: { items: 2 },
        768: { items: 4 },
        900: { items: 6 }
    }
});

/* =============================
   Testimonials Carousel
============================= */
$(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    margin: 20,
    responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 }
    }
});

/* =============================
   Back To Top Button
============================= */
$(window).scroll(function () {

    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }

});

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

/* =============================
   Accordion
============================= */
$('.accordion-header').click(function () {

    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);

    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');

});

/* =============================
   Smooth Scroll
============================= */
$('a[href*="#"]').on('click', function (e) {

    if (this.hash !== "") {

        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500);

    }

});
```

});
