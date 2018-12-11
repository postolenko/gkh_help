$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();
    $(".scroll_box").mCustomScrollbar();

});

$(document).ready(function() {		

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity,
			width: '100%'
		});

	});

	$(".news_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendArrows: $(".slider_arrows")
    });

    $(".popup_news_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendArrows: $(".pagination")
    });

});

