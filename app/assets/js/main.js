$(function() {
	var dave = document.getElementById('dave').classList,
		welcome = document.getElementById('welcome').classList;

	$.jInvertScroll([
		'.scroll'
	], {
		onScroll: function(progress) {
			if (Math.round(progress*20) % 2) {
				dave.add('walk-1');
				dave.remove('walk-2');
			} else {
				dave.add('walk-2');
				dave.remove('walk-1');
			}

			if (progress > 0.45 && progress < 0.55) {
				dave.add('jump');
			} else {
				dave.remove('jump');
			}

			if (progress > 0.49 && progress < 0.51) {
				dave.add('must-clear');
			} else {
				dave.remove('must-clear');
			}

			if (progress > 0.05) {
				welcome.add('bounce-up');
			}

			if (progress > 0.99) {
				dave.add('celebrate')
			} else {
				dave.remove('celebrate');
			}
		}
	});

	$('.continue').on('click', function(e) {
		e.preventDefault();
		welcome.add('bounce-up');
	});
});
