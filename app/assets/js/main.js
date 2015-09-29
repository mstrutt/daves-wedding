$(function() {
	var $dave = $('.dave'),
		$welcome = $('.welcome');

	$.jInvertScroll([
		'.scroll'
	], {
		onScroll: function(progress) {
			if (Math.round(progress*20) % 2) {
				$dave
					.addClass('walk-1')
					.removeClass('walk-2');
			} else {
				$dave
					.addClass('walk-2')
					.removeClass('walk-1');
			}

			if (progress > 0.45 && progress < 0.55) {
				$dave.addClass('jump');
			} else {
				$dave.removeClass('jump');
			}

			if (progress > 0.49 && progress < 0.51) {
				$dave.addClass('must-clear');
			} else {
				$dave.removeClass('must-clear');
			}

			if (progress > 0.05) {
				$welcome.addClass('bounce-up');
			}

			if (progress > 0.99) {
				$dave.addClass('celebrate')
			} else {
				$dave.removeClass('celebrate');
			}
		}
	});

	$('.continue').on('click', function(e) {
		e.preventDefault();
		$welcome.addClass('bounce-up');
	});
});
