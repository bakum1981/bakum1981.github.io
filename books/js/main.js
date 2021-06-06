$(function () {
	// open or close mobile menu
	function toggleMenu () {
		let brg_btn = document.querySelector('.hamburger') 	
			if(brg_btn){
				brg_btn.onclick = function() {
				let menu = document.querySelector('.header__nav')
				// let blockRight = document.querySelector('.header__block--right')
				let body = document.querySelector('body')	
				brg_btn.classList.toggle('is-active')
				menu.classList.toggle('active')
				body.classList.toggle('lock')  //remove scroll on body
				// blockRight.classList.toggle('hide')  
			}
		}
			
	}

	toggleMenu()

		// rotate pictures during hover
		function rotatePicture() {
			const images = document.querySelectorAll('.instagram__item');
function startRotate(event){
			const halfHeight = event.target.offsetHeight / 2;
			const halfWidth = event.target.offsetWidth / 2;
			event.target.style.transform = 'rotateX('+-(event.offsetY - halfHeight) / 6 + 'deg) rotateY('
			+ (event.offsetX - halfWidth) / 6 + 'deg)';
			
		}

		// stop  rotates the picture in a 3d plane
		function stopRotate(event){
			event.target.style.transform = 'rotate(0)';
			
		}

		if(images){

		for(let i = 0; i < images.length; i++){
			const image = images[i];
			image.addEventListener('mousemove', startRotate);
			image.addEventListener('mouseout', stopRotate);
		}	
		}


		}
		
	rotatePicture()	

	const showSearch = () => {
		const trigger = document.querySelector('.header__trigger');
		const search = document.querySelector('.search-form');
		trigger.onclick = () => {
			if(trigger) {
				search.classList.toggle('active')
			}
		}

		
	}
	showSearch();


	$('.new__wrapper').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.main-books__sliders').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	

});