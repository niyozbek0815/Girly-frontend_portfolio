$(function() {
    $('.responsive3').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.responsive3 .slick-next').html('<i class="fas fa-chevron-circle-right"></i>');
    $('.responsive3 .slick-prev').html('<i class="fas fa-chevron-circle-left"></i>');



    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.recent .slick-next').html('<i class="fas fa-chevron-circle-right"></i>');
    $('.recent .slick-prev').html('<i class="fas fa-chevron-circle-left"></i>');
    $('.responsive2').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.responsive2  .slick-next').html('<i class="fas fa-chevron-circle-right"></i>');
    $('.responsive2 .slick-prev').html('<i class="fas fa-chevron-circle-left"></i>');
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,

        dots: true,
        infinite: false,
        speed: 500,
    });
    $('.autoplay li:first-child button').html('<img src="img/about-me-img1.png" alt="">');
    $('.autoplay li:nth-child(2) button').html('<img src="img/about-me-img2.png" alt="">');
    $('.autoplay li:nth-child(3) button').html('<img src="img/about-me-img3.png" alt="">');
    d = $('.site').css('width');
    $('.autoplay li:first-child button').click(function() {
        if (d > 456) {
            $('.autoplay li:first-child button').css('width', '130px');
            $('.autoplay li:first-child button').css('height', '130px');
            $('.autoplay li:first-child').css('width', '140px');
            $('.autoplay li:first-child').css('height', '140px');
            $('.autoplay li:nth-child(2) button').css('width', '80px');
            $('.autoplay li:nth-child(2) button').css('height', '80px');
            $('.autoplay li:nth-child(2)').css('width', '90px');
            $('.autoplay li:nth-child(2)').css('height', '90px');
            $('.autoplay li:nth-child(3) button').css('width', '80px');
            $('.autoplay li:nth-child(3) button').css('height', '80px');
            $('.autoplay li:nth-child(3)').css('width', '90px');
            $('.autoplay li:nth-child(3)').css('height', '90px');
        } else {
            $('.autoplay li:first-child button').css('width', '80px');
            $('.autoplay li:first-child button').css('height', '80px');
            $('.autoplay li:first-child').css('width', '90px');
            $('.autoplay li:first-child').css('height', '90px');
            $('.autoplay li:nth-child(2) button').css('width', '40px');
            $('.autoplay li:nth-child(2) button').css('height', '40px');
            $('.autoplay li:nth-child(2)').css('width', '50px');
            $('.autoplay li:nth-child(2)').css('height', '50px');
            $('.autoplay li:nth-child(3) button').css('width', '40px');
            $('.autoplay li:nth-child(3) button').css('height', '40px');
            $('.autoplay li:nth-child(3)').css('width', '50px');
            $('.autoplay li:nth-child(3)').css('height', '50px');
        };
    });
    $('.autoplay li:nth-child(2) button').click(function() {
        if (d > 446) {
            $('.autoplay li:first-child button').css('width', '80px');
            $('.autoplay li:first-child button').css('height', '80px');
            $('.autoplay li:first-child').css('width', '90px');
            $('.autoplay li:first-child').css('height', '90px');
            $('.autoplay li:nth-child(2) button').css('width', '130px');
            $('.autoplay li:nth-child(2) button').css('height', '130px');
            $('.autoplay li:nth-child(2)').css('width', '140px');
            $('.autoplay li:nth-child(2)').css('height', '140px');
            $('.autoplay li:nth-child(3) button').css('width', '80px');
            $('.autoplay li:nth-child(3) button').css('height', '80px');
            $('.autoplay li:nth-child(3)').css('width', '90px');
            $('.autoplay li:nth-child(3)').css('height', '90px');
        } else {
            $('.autoplay li:first-child button').css('width', '40px');
            $('.autoplay li:first-child button').css('height', '40px');
            $('.autoplay li:first-child').css('width', '50px');
            $('.autoplay li:first-child').css('height', '50px');
            $('.autoplay li:nth-child(2) button').css('width', '80px');
            $('.autoplay li:nth-child(2) button').css('height', '80px');
            $('.autoplay li:nth-child(2)').css('width', '90px');
            $('.autoplay li:nth-child(2)').css('height', '90px');
            $('.autoplay li:nth-child(3) button').css('width', '40px');
            $('.autoplay li:nth-child(3) button').css('height', '40px');
            $('.autoplay li:nth-child(3)').css('width', '50px');
            $('.autoplay li:nth-child(3)').css('height', '50px');
        };
    });
    $('.autoplay li:nth-child(3) button').click(function() {
        if (d > 456) {
            $('.autoplay li:first-child button').css('width', '80px');
            $('.autoplay li:first-child button').css('height', '80px');
            $('.autoplay li:first-child').css('width', '90px');
            $('.autoplay li:first-child').css('height', '90px');
            $('.autoplay li:nth-child(2) button').css('width', '80px');
            $('.autoplay li:nth-child(2) button').css('height', '80px');
            $('.autoplay li:nth-child(2)').css('width', '90px');
            $('.autoplay li:nth-child(2)').css('height', '90px');
            $('.autoplay li:nth-child(3) button').css('width', '130px');
            $('.autoplay li:nth-child(3) button').css('height', '130px');
            $('.autoplay li:nth-child(3)').css('width', '140px');
            $('.autoplay li:nth-child(3)').css('height', '140px');
        } else {
            $('.autoplay li:first-child button').css('width', '40px');
            $('.autoplay li:first-child button').css('height', '40px');
            $('.autoplay li:first-child').css('width', '50px');
            $('.autoplay li:first-child').css('height', '50px');
            $('.autoplay li:nth-child(2) button').css('width', '40px');
            $('.autoplay li:nth-child(2) button').css('height', '40px');
            $('.autoplay li:nth-child(2)').css('width', '50px');
            $('.autoplay li:nth-child(2)').css('height', '50px');
            $('.autoplay li:nth-child(3) button').css('width', '80px');
            $('.autoplay li:nth-child(3) button').css('height', '80px');
            $('.autoplay li:nth-child(3)').css('width', '90px');
            $('.autoplay li:nth-child(3)').css('height', '90px');
        }
    });
    $('.instagram-responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.navbar-btn').click(function() {
        $('.nav').css('left', '-20px');
    });
    $('.nav .close').click(function() {
        $('.nav').css('left', '-300px');
    });




})