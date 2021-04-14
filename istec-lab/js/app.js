// // Import jQuery module (npm i jquery)
import $ from 'jquery'
import magnificPopup from 'magnific-popup'
import regeneratorRuntime from "regenerator-runtime"

// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

$(function(){	// Custom JS
	// open or close mobile menu
	let brg_btn = document.querySelector('.hamburger');
	brg_btn.onclick = function () {
		let menu = document.querySelector('.main__nav');
		let body = document.querySelector('body');
		brg_btn.classList.toggle('is-active')
		menu.classList.toggle('active')
		body.classList.toggle('lock')  //remove scroll on body
	}

// hide adaptiv menu on click element of menu	
function hideMenu(){
	let brg_btn = document.querySelector('.hamburger');
	let menuEl = document.querySelectorAll('.main__link'); 
	let menu = document.querySelector('.main__nav')
	let body = document.querySelector('body');
		for(let i=0; i<menuEl.length; i++){
			let clickItem = menuEl[i]
			clickItem.onclick = function() {
				brg_btn.classList.remove('is-active')
				menu.classList.remove('active')
				body.classList.remove('lock')  //remove scroll on body
			}
		}		
	}

hideMenu()



	// show gallery of images after click on picture
	$('.popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				// return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	
	// show or hide modal windows
	function toggleModal() {
		let body = document.querySelector('body');
		const trigger = document.querySelectorAll('.trigger');
		const close = document.querySelectorAll('.modal__close')
		const windows = document.querySelectorAll('.modal') //all modal windows

		// show modal on click
		trigger.forEach(item => {
			item.addEventListener('click', function (e) {
				const currentItem = e.target.getAttribute('data-popup')
				for (let i = 0; i < windows.length; i++) {
					if (windows[i].getAttribute('data-modal') === 'true' && !windows[i].classList.contains(modal)) {
						windows[i].classList.remove('modal-active')
						windows[i].setAttribute('data-modal', 'false')
					} if (windows[i].getAttribute('data-popup') === currentItem) {
						windows[i].classList.add('modal-active')
						body.classList.add('lock')  //remove scroll on body
						windows[i].setAttribute('data-modal', 'true')
					}
				} //hide popap opend before
				if (e.target) {
					e.preventDefault()
				}
			})
		})



		// hide modal when  click on the escape
		document.addEventListener('keydown', function (event) {
			const keycode = event.keyCode;
			if (keycode === 27) {
				windows.forEach(item => {
					item.classList.remove('modal-active')
					body.classList.remove('lock') //add scroll on body 
					item.setAttribute('data-modal', false)
				})

			}
		});

		// hide modal when  click on close button
		for (let i = 0; i < close.length; i++) {
			let clickItem = close[i]
			windows.forEach(item => {
				clickItem.addEventListener('click', function () {
					item.classList.remove('modal-active')
					body.classList.remove('lock') //add scroll on body
					item.setAttribute('data-modal', false)
				})
			})


		}

		// hide modal when click on space around modal
		windows.forEach(item => {
			item.addEventListener('click', function (e) {
				if (e.target === item) {
					item.classList.remove('modal-active')
					body.classList.remove('lock') //add scroll on body
					item.setAttribute('data-modal', false)

				}
			})
		})

	}
	toggleModal()

	// turn on function "formsend" during event submit
	document.addEventListener('submit', formsend)

	// send data to mail
	async function formsend(e) {
	const form = document.getElementById('discount-form')
		e.preventDefault()
		let formdata = new FormData(form)
		form.classList.add('sending')
		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formdata
		})
		if (response.ok) {
			let result = await response.json()
			alert(result.message)
			form.reset()
			form.classList.remove('sending')
		} else {
			alert("Что-то пошло не так")
			form.classList.remove('sending')
		}
	}

	
	// move to top of screen
	$('.top-arrow').click(function(){
		$('html, body').css('scrollTop', '0')
	});
	

	// show or hide top-arrow during scroll
	$(window).scroll(function(){
		const $top = $('.top-arrow')
		if($(this).scrollTop() > 20){
			$top.fadeIn()			
		}else{
			$top.fadeOut()		
		}
	});
});
