$(function() {
	let brg_btn = document.querySelector('.hamburger');
	let menu = document.querySelector('.header__nav-menu');
	let body = document.querySelector('body');	

	brg_btn.onclick = function() {
		brg_btn.classList.toggle('is-active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	}

	$('.sliders__container').slick({
	  arrows: false,	
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
			
});	


