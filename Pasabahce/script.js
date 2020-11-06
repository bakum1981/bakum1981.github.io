$(document).ready(function() {
	$('.header__brg').click(function(){
		$('.header__brg').toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('.body').toggleClass('lock');
	});
});