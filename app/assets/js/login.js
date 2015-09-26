$(function() {
		$('.login').on('click', function(e) {
			e.preventDefault();
			window.location = $('.login-input').val().toLowerCase();
		});

		$('.login-input').keyup(function(e) {
			if(e.keyCode === 13){
				window.location = $('.login-input').val().toLowerCase();
			}
		});
});
