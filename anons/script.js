$(document).ready(function() {
	$('.hamburger').click(function(){
		$('.hamburger').toggleClass('is-active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});