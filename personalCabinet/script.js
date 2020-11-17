$(document).ready(function() {
	$('.hamburger').click(function(){
		$('.hamburger').toggleClass('is-active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	const cart = this.querySelector('.main__item-cart');
	const halfHeight = cart.offsetHeight / 2;	
	const halfWidth = cart.offsetWidth / 2;

	

	const rotate = (event) =>  {		
		cart.style.transform = 'rotateX('+-(event.offsetY - halfHeight) / 5 + 'deg) rotateY('
	+ (event.offsetX - halfWidth) / 5 + 'deg)';	
	}


	cart.addEventListener('mousemove', rotate);


});