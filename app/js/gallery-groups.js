jQuery(document).ready(function($) {
	$('.gallery__tabs_switch').click(function(event) {
		event.preventDefault();
		var flag =  $(this).data('flag');
		console.log(flag);
		$('.gallery__previews_item').hide();
		$("."+ flag).show();
		if(flag =="all") {
			$('.gallery__previews_item').show();
		}
	});
});