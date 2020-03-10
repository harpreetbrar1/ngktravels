var winWidth;

function toggleMenu() {
    jQuery(".toggle-btn").click(function(e) {
        e.stopPropagation();
        jQuery(".mobile-menu .main-nav").parent().toggleClass("active");
    });
    jQuery(".close-btn").click(function(){
        jQuery(".mobile-menu .main-nav").parent().removeClass("active");
    });
}
function bodyScroll() {
    $(document).on('scroll', function (event) {
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 0) {
            jQuery('header').addClass("setTop");
        }
        else {
            $('header').removeClass("setTop");
        }
    });
    $(document).on('click', '.main-nav a[href^="#"], .logo, .sticky-nav a[href^="#"]', function (e) {
        e.preventDefault();
        jQuery(".main-nav li").removeClass("active");
        jQuery(this).parent("li").toggleClass("active");
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 700);
    });
}
function dynamicMargin() {
    var height = $('.sticky-nav').outerHeight();
    var lightboxHeight = $('.lightbox .bg-img img').outerHeight();
    $('footer').css({'margin-bottom': height + 'px'});
}

function lightbox() {
  $('.lightbox').addClass("active");
  $('.lightbox .lightbox-inner .bg-img img').click(function(e){
      e.stopPropagation();
      e.preventDefault();
  });
  $('.offer-btn').click(function() {
      $('.lightbox').addClass("active");
  });
  $('.offer-close').click(function() {
      $('.lightbox').removeClass("active");
  });
}

jQuery(document).ready(function() {
    setTimeout(lightbox, 3500);
    dynamicMargin();
    $('.galleryimg').slickLightbox();
    winWidth = jQuery(window).width();
    bodyScroll();
    if(winWidth < 991) {
        toggleMenu();
    }
    jQuery('.accessory-slider').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
    jQuery('.testimonial-slider').slick({
        arrows: false,
        autoplay: true,
        dots:true,
        autoplaySpeed: 2000
    });
});

jQuery(window).resize(function() {
    var winWidth;
    winWidth = jQuery(window).width();
    if(winWidth < 768) {
        // dynamicMargin();
    }
    if(winWidth < 991) {
        toggleMenu();
    }
});

jQuery(document).click(function() {
    $('.lightbox').removeClass("active");
    jQuery(".mobile-menu .main-nav").parent().removeClass("active");
});
