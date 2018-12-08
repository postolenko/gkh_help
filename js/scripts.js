var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

	getFooterPosition();
	getDocumentTopPadding();

});

$(window).resize(function() {
    
	getFooterPosition();
	getDocumentTopPadding();

});

$(document).ready(function() {   

	$(".show_popup").click(function(e) {

        e.preventDefault();

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        popupBlock.addClass("active");

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
        "margin-top" : -$(".footer_section").height() + "px"
    });

    $(".wrapper").css({
        "padding-bottom" : $(".footer_section").height() + "px"
    });

}

function getDocumentTopPadding() {

	$(".wrapper").css({
		"padding-top" :  $(".header").outerHeight() + "px"
	});

}