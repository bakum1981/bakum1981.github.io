$(document).ready(function() {
	$('.hamburger').click(function(){
		$('.hamburger').toggleClass('is-active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	var videoA = function () {this.innerHTML = '<iframe  src="https://www.youtube.com/watch?v=zRCUDjXCfiM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}; 
	document.querySelector('.item-brend__video').addEventListener('click', function (e) { this.removeEventListener('click', videoA, false); videoA.apply(this, arguments); } , false);	


	const cart = this.querySelector('.main__item-cart');
	const rotate = (event) =>  {
		
		const halfHeight = cart.offsetHeight / 2;	
		const halfWidth = cart.offsetWidth / 2;		
			cart.style.transform = 'rotateX('+-(event.offsetY - halfHeight) / 5 + 'deg) rotateY('
		+ (event.offsetX - halfWidth) / 5 + 'deg)';	
	}

	if(cart){
		cart.addEventListener('mousemove', rotate);
	}

	$('.close').click(function(){
		$('.popap').addClass('popap-hide');
	});
	

});