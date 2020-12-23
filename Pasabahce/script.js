$(document).ready(function() {
	$('.hamburger').click(function(){
		$('.hamburger').toggleClass('is-active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});	

	function rotateCart() {
		const cart = document.querySelector('.main__item-cart');
		const rotate = (event) =>  {		
			const halfHeight = cart.offsetHeight / 2;	
			const halfWidth = cart.offsetWidth / 2;		
				cart.style.transform = 'rotateX('+-(event.offsetY - halfHeight) / 5 + 'deg) rotateY('
			+ (event.offsetX - halfWidth) / 5 + 'deg)';			
		}

		cart.addEventListener('mousemove', rotate);
	}

	rotateCart();	

	
	
	// set foonction for using popup "Feedback";
	function useFeedback()	{
		let selectInput = $(' .list__input');
		let selectList = $('.select__list');
		let rotate = 0;

		$('.feetback__input-wrap').click(function(){		
			rotate = rotate + 90;
			let arrow = document.querySelector('.select__arrow');
			arrow.style.transform = `rotate(${rotate}deg)`;
			arrow.style.top = 'calc(50% - 12px)';
			selectList.toggleClass('active');
			selectInput.toggleClass('input-select');
		});

		let input = $('.list__input');
		
		let items = $('.select__list-item');	

		items.click(function (e){
			rotate = rotate + 90;
			let arrow = document.querySelector('.select__arrow');
			arrow.style.transform = `rotate(${rotate}deg)`;
			selectList.removeClass('active');
			selectInput.removeClass('input-select');
			input.val(e.target.innerText);		
		});	
	}

	useFeedback();
});


var count = 0; 
function myFun() {
	var top = document.querySelector('.check__gallery-img--top');
	var bottom = document.querySelector('.check__gallery-img--bottom');
	count ++;
	var file = document.getElementById('file').files[0];
	var currentImage1 = document.getElementById('preview1');	
	var currentImage2 = document.getElementById('preview2');	
	var currentImage3 = document.getElementById('preview3');
	var currentImage4 = document.getElementById('preview4');	
	var currentImage5 = document.getElementById('preview5');
	var currentImage6 = document.getElementById('preview6');	
	var currentImage7 = document.getElementById('preview7');	
	var currentImage8 = document.getElementById('preview8');	

	
		var fileReader = new FileReader();

		fileReader.onload = function (event) {
			if(count == '1') {
				currentImage1.src = fileReader.result;
				document.querySelector('.check__gallery-img--one').style.position = 'static';
				document.querySelector('.check__gallery-img--one').style.opacity = '1';
			}
			if(count == '2') {
				currentImage2.src = fileReader.result;
				document.querySelector('.check__gallery-img--two').style.position = 'static';
				document.querySelector('.check__gallery-img--two').style.opacity = '1';
			}
			if(count == '3') {
				currentImage3.src = fileReader.result;
				document.querySelector('.check__gallery-img--three').style.position = 'static';
				document.querySelector('.check__gallery-img--three').style.opacity = '1';

			}
			if(count == '4') {
				currentImage4.src = fileReader.result;
				document.querySelector('.check__gallery-img--four').style.position = 'static';
				document.querySelector('.check__gallery-img--four').style.opacity = '1';

			}
			if(count == '5') {
				currentImage5.src = fileReader.result;
				document.querySelector('.check__gallery-img--five').style.position = 'static';
				document.querySelector('.check__gallery-img--five').style.opacity = '1';
			}
			if(count == '6') {
				currentImage6.src = fileReader.result;
				document.querySelector('.check__gallery-img--six').style.position = 'static';
				document.querySelector('.check__gallery-img--six').style.opacity = '1';
			}
			if(count == '7') {
				currentImage7.src = fileReader.result;
				document.querySelector('.check__gallery-img--seven').style.position = 'static';
				document.querySelector('.check__gallery-img--seven').style.opacity = '1';
			}
			if(count == '8') {
				currentImage8.src = fileReader.result;
				document.querySelector('.check__gallery-img--eight').style.position = 'static';
				document.querySelector('.check__gallery-img--eight').style.opacity = '1';
				count = 0;
			}
		}		

		fileReader.readAsDataURL(file);
	}
