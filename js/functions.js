$(document).ready(function () {
    if(window.location.href.indexOf("microsoft.html") > -1) {
		document.getElementById("MicrosoftHeader").style.backgroundImage="url(../img/bgMicrosoft.jpg)";
    }
});

$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

var amountScrolled = 700;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('fast');
	} else {
		$('a.back-to-top').fadeOut('fast');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: $("#"+'microsoftContents').offset().top
	}, 'fast');
	return false;
});