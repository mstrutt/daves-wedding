$(function() {
	var $dave = $('.dave');

	$.jInvertScroll([
		'.scroll'
	], {
		onScroll: function(progress) {
			if (progress > 0.63 && progress < 0.74) {
				$dave.addClass('jump');
			} else {
				$dave.removeClass('jump');
			}
		}
	});

	$('.continue').on('click', function(e) {
		e.preventDefault();
		$('.welcome').addClass('bounce-up');
	});
});
