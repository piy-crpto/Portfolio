$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
    });

    //toggle navbar script

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script

    var typed = new Typed(".typing", {
        strings: ["Programmer", "Developer", "Designer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Programmer", "Developer", "Designer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })


    //owl carousel script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            691: {
                items: 2,
                nav: false
            },
            981: {
                items: 3,
                nav: false
            }
        }
    });
});