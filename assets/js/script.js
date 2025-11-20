
$(".toggle-menu").click(function () {
    var menuId = "#" + $(this).data("title");
    var targetMenu = $(menuId);

    var isAlreadyOpen = targetMenu.hasClass("show-mega-menu");

    $(".mega-menu-wrapper .mega-menu-box").removeClass("show-mega-menu");

    if (!isAlreadyOpen) {
        targetMenu.addClass("show-mega-menu");
    }
});


$(document).ready(function () {
    $('.custom-toggle-icon').click(function () {

        var togglerIcon = $('.custom-toggle-icon');

        var closeIcon = togglerIcon.find('img.close-icon');
        var barsIcon = togglerIcon.find('img.bars-icon');

        const $menu = $(this).closest(".mobile-header").next(".mobile-header-list");

        if (!$menu.hasClass('mobile-menu-show')) {

            closeIcon.show();
            barsIcon.hide();

            $menu.css('display', 'block');
            setTimeout(() => {
                $menu.addClass('mobile-menu-show');
            }, 10);
        } else {
            closeIcon.hide();
            barsIcon.show();

            $menu.removeClass('mobile-menu-show');
            $menu.one('transitionend', function () {
                $menu.css('display', 'none');
            });
        }
    });


    var closeIcon = $('.custom-toggle-icon').find('img.close-icon');

    $(closeIcon).click(function () {
        $(this).closest(".mobile-header-list").removeClass("mobile-menu-show");
        $(".drodown-box").find('.show-mobile-menu').removeClass("show-mobile-menu");
    });

    $('.custom-close-icon').click(function () {
        $(this).closest(".mobile-header-list").removeClass("mobile-menu-show");
        $(this).closest(".drodown-box").find('.show-mobile-menu').removeClass("show-mobile-menu");
    });
});

$('.mobile-dropdown').on('click', function(){
    $(this).find('.dropdown-list').slideToggle();
})

$('.toggle-mobile-menu').on('click', function () {
    var menuTitle = $(this).attr("data-title");
    var $menu = $("#" + menuTitle);

    if (!$menu.hasClass('show-mobile-menu')) {

        $menu.css('display', 'block');
        setTimeout(() => {
            $menu.addClass('show-mobile-menu');
        }, 10);
    } else {
        $menu.removeClass('show-mobile-menu');
        $menu.one('transitionend', function () {
            $menu.css('display', 'none');
        });
    }
});


$('.footer-accordion-header').click(function () {
    $(this).toggleClass('active');
    $(this).next('.footer-accordion-content').slideToggle(200);

    $(this).find('.arrow-icon').toggleClass('rotate');
});


$(".accordion-tab").on("click", function () {
    var e = "#" + $(this).attr("title");

    if ($(window).width() > 991) {

        $(".service-accordion-content .accordion-content-show")
            .removeClass("accordion-content-show");
        $(e).addClass("accordion-content-show");
    } else {

        $(this).next(".accordion-content").not(e).slideUp();
        $(this).after($(e).stop(true, true).slideToggle());
        $(this).find("span.fa").toggleClass("rotate90");
    }
});



$('.arrival-slider').owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    nav: true,
    dots: false,
    navText: [
        '<img src="./assets/images/icons/prev.svg" alt="Prev" class="nav-arrow">',
        '<img src="./assets/images/icons/next.svg" alt="Next" class="nav-arrow">'
    ],
    responsive: {
        0: {
            items: 1.7
        },
        767: {
            items: 2.7
        },
        1200: {
            items: 3.7
        }
    }
})

$('.brand-slider').owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        }
    }
})
//faq accordion on frontpage
 if ($('.custom-accordion-header').length) {
        $(".custom-accordion-header").click(function () {
            if ($(this).find("span.fa").hasClass("fa-angle-down")) {
                $(".custom-accordion").find(".content-show").slideUp().removeClass("content-show");
                $(".custom-accordion").find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
                $(this).find("span.fa").removeClass("fa-angle-down").addClass("fa-angle-up");
                $(this).next(".custom-accordion-body").slideDown().addClass("content-show");
            } else if ($(this).find("span.fa").hasClass("fa-angle-up")) {
                $(this).find("span.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
                $(this).next(".custom-accordion-body").slideUp().removeClass("content-show");
            }
        });
    }