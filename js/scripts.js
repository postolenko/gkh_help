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