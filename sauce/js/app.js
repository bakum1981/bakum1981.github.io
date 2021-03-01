$(function() {
	let brg_btn = document.querySelector('.hamburger');
	let menu = document.querySelector('.header__nav');
	let body = document.querySelector('body');	
	let search_btn = document.querySelector('.search__button')
	let search_input = document.querySelector('.search__input')
	const progress = document.querySelector('.progress')

	brg_btn.onclick = function() {
		brg_btn.classList.toggle('is-active')
		menu.classList.toggle('active')
		body.classList.toggle('lock')
	}	

	$('.sliders').slick({
	  arrows: false,	
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	})

	$('.cranberry__sliders').slick({		
	  arrows: true,	
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	})

	search_btn.addEventListener('click', function(e){
		e.preventDefault()
		search_input.classList.toggle('active')
	})

	function progressBar(e){			
		let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
		let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		let per = windowScroll / windowHeight * 100;
		progress.style.width = per + '%';
		
	}


	document.addEventListener('scroll', progressBar)

	

	const images = document.querySelectorAll('.section__image');
	
	function startRotate(event){
		const halfHeight = event.target.offsetHeight / 2;
		const halfWidth = event.target.offsetWidth / 2;
		event.target.style.transform = 'rotateX('+-(event.offsetY - halfHeight) / 12 + 'deg) rotateY('
		+ (event.offsetX - halfWidth) / 9 + 'deg)';
		
	}

	function stopRotate(event){
		event.target.style.transform = 'rotate(0)';
		
	}

	for(let i = 0; i < images.length; i++){
		const image = images[i];
		image.addEventListener('mousemove', startRotate);
		image.addEventListener('mouseout', stopRotate);
	}
	
});	


