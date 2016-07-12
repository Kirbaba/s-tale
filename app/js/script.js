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

	$('.sub').click(function(event) {
		event.preventDefault();
		$('.sub__box').toggle();
		if($('.mail__box').length !=0) {
			$('.mail__box').hide();
		}
	});



	$('.mail').click(function(event) {
		event.preventDefault();
			$('.mail__box').toggle();
		if($('.sub__box').length !=0) {
			$('.sub__box').hide();
		}

	});

	$(document).on('click', '.services__nav ul li', function(event) {
		var but_menu = $(this).children('ul');
		if (but_menu.length != 0) {
			event.preventDefault();
			but_menu.toggle();
		}		
	});
});




$(window).scroll(function () {
	if (window.pageYOffset > 50) {

			$(".header-bottom").addClass("header-bottom--onScroll");
	} else {
			$(".header-bottom").removeClass("header-bottom--onScroll");
	}
});
