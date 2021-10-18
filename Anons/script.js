$(document).ready(function() {
	

	function rotateCart() {
		const cart = document.querySelector('.anons__content-cart');
		function rotate(event) {	

			const halfHeight = cart.offsetHeight / 2;	
			const halfWidth = cart.offsetWidth / 2;		
				cart.style.transform = 'rotateX('+-(event.offsetY - halfHeight) / 5 + 'deg) rotateY('
			+ (event.offsetX - halfWidth) / 5 + 'deg)';			
		}
		if(cart){
			cart.addEventListener('mousemove', rotate);
		}
	}

	rotateCart();	


});