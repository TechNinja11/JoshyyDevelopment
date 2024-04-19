$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('bx-x');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('bx-x');
        $('.navbar').removeClass('nav-toggle');
    });
});

var typed = new Typed(".typing", {
    strings:["","College Student","Information Technology","Web Development"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 500,
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home-text h3', { delay: 200 });
srtop.reveal('.home-text h1', { delay: 200 });
srtop.reveal('.home-text h2', { delay: 200 });
srtop.reveal('.home-text p', { delay: 200 });
srtop.reveal('.home-text .btn', { delay: 200 });

srtop.reveal('.home-img', { delay: 400 });
srtop.reveal('.social .facebook', { interval: 600 });
srtop.reveal('.social .github', { interval: 800 });
srtop.reveal('.social .instagram', { interval: 600 });
srtop.reveal('.social .tiktok', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .image', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 300 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });