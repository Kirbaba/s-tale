jQuery(document).ready(function($) {
	$('.about-info__content_toggle').click(function(event) {
		event.preventDefault();
		console.log($('.about-info__content_all').length);
		if ($('.about-info__content_all').css("display")=="none") {
			$('.about-info__content_all').slideDown("slow");
		}
		else {
			$('.about-info__content_all').slideUp("slow");
		}
	});
});