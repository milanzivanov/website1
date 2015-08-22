(function ($) {

    new WOW().init();

    //jQuery preloader
    $(window).load(function() { 
        $("#preloader").delay(100).fadeOut("slow");
        $("#load").delay(100).fadeOut("slow");
    });

    //jQuery mobile menu
    $(".menu-button").click(function() {
        $(".mobile-navigation").slideToggle("slow");
    });
    
    $( window ).resize(function() {
        var navigation = $(".mobile-navigation");
        var button = $(".menu-button");
        if ($( window ).width() >= 767) {
            navigation.css("display","inline-block");
            button.css("display","none");
        } else {
            navigation.css("display","none");
            button.css("display","inline-block");   
        }
    });

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        var header = $(".header"); 
        if ($(this).scrollTop() > 1) {
            header.addClass("nav-collapse");
        } else {
            header.removeClass("nav-collapse");
        }
    });

        $(document).on("scroll", onScroll);
 
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
 
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
 
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
 
        function onScroll(event){
            var scrollPosition = $(document).scrollTop();
            jQuery('.nav ul li a').each(function () {
                var currentLink = $(this);
                var refElement = $(currentLink.attr("href"));
                if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                    $('.nav ul li a').removeClass("active");
                    currentLink.addClass("active");
                }
                else{
                    currentLink.removeClass("active");
                }
            });
        }
})(jQuery);