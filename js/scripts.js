var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

	getFooterPosition();
    getAdaptivePositionElements();
    getPromoHeight();
    showRespBtn();

});

$(window).resize(function() {
    
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	getFooterPosition();
    getAdaptivePositionElements();
    getPromoHeight();
    showRespBtn();

});

$(document).ready(function() {

    $(".respmenubtn").click(function() {

        if( $(".main-nav_wrapp").is(":hidden") ) {

            $(".main-nav_wrapp").fadeIn(300);

            $(this).addClass("active");

        } else {

            $(".main-nav_wrapp").fadeOut(300);

            $(this).removeClass("active");

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $(".main-nav_wrapp").is(":visible") ) {

                $(".main-nav_wrapp").fadeOut(300);

                $(".respmenubtn").removeClass("active");

        }

    });

    // -----------------------

    $(document.body).on('click', '.show_popup', function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        popupBlock.addClass("active");

        if( $(this).closest(".news_slider") ) {
            var currentSLideIndex = parseInt( $(this).attr("data-thumbindex") );
            initialSlider(currentSLideIndex);
        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").hasClass("active") ) {

                $(".popup_wrapp").removeClass("active");

            }

        }

    });

    $(".close-popup").click(function() {

        popupBlock = $(this).closest(".popup_wrapp");
        popupBlock.removeClass("active");

    });


    $(document).mouseup(function (e){

        hide_element = $('.popup');

        if (!hide_element.is(e.target)

            && hide_element.has(e.target).length === 0) {

            hide_element.closest(".popup_wrapp").removeClass("active");

        }

    });

});

function getFooterPosition() {

    $(".footer_section").css({
        "margin-top" : -$(".footer_section").outerHeight() + "px"
    });

    $(".wrapper").css({
        "padding-top" :  $(".header").outerHeight() + "px",
        "padding-bottom" : $(".footer_section").outerHeight() + "px"
    });

}

function getAdaptivePositionElements() {

    $(".append-elem").each(function() {

        screenParam = parseInt( $(this).attr("data-min-screen") );

        indexElem = $(this).attr("data-append-desktop-elem");

        if( bodyWidth <= screenParam ) {

            $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

        }

         if( bodyWidth > screenParam ) {

            $("[data-append-desktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

        }

    });

}

function getPromoHeight() {

    $(".promo-content").css({
        "min-height" : "auto"
    });

    if( bodyWidth > 768 ) {

        $(".promo-content").css({
            "min-height" : $(window).height() - $(".header").height() + "px"
        });

    } else {

        $(".promo-content").css({
            "min-height" : "auto"
        });

    }

}

function showRespBtn() {

    if( $(".respmenubtn").is(":visible") ) {

        if( $(".main-nav_wrapp .append-elem *").length > 0 ) {

            $(".respmenubtn").addClass("visible");

        } else {

            $(".respmenubtn").removeClass("visible");

        }

    }

}

function initialSlider(currentSLide) {

    if( $(".popup_news_slider").hasClass("slick-initialized") ) {

        $(".popup_news_slider").slick("unslick");
        
    }

    $(".popup_news_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendArrows: $(".pagination"),
        initialSlide: currentSLide
    });    

}