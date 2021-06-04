// // Import jQuery module (npm i jquery)
import $ from 'jquery'
import magnificPopup from 'magnific-popup'
import regeneratorRuntime from "regenerator-runtime"

// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

$(function () {	// Custom JS
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
	function hideMenu() {
		let brg_btn = document.querySelector('.hamburger');
		let menuEl = document.querySelectorAll('.main__link');
		let menu = document.querySelector('.main__nav')
		let body = document.querySelector('body');
		for (let i = 0; i < menuEl.length; i++) {
			let clickItem = menuEl[i]
			clickItem.onclick = function () {
				brg_btn.classList.remove('is-active')
				menu.classList.remove('active')
				body.classList.remove('lock')  //remove scroll on body
			}
		}
	}

	hideMenu()



	// show gallery of images after click on picture
	const popupGallery = () => {
		const popup = document.querySelector('.popup')
		if (popup) {
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
		}


	}
	popupGallery()



	// show or hide modal windows
	function toggleModal() {
		let body = document.querySelector('body');
		const trigger = document.querySelectorAll('.trigger');
		const close = document.querySelectorAll('.modal__close')
		const windows = document.querySelectorAll('.modal') //all modal windows
		scroll = calcScroll()

		if (trigger) {
			// show modal on click
			trigger.forEach(item => {
				item.addEventListener('click', function (e) {
					const currentItem = e.target.getAttribute('data-popup')
					for (let i = 0; i < windows.length; i++) {
						  // hide opend modals
						if (windows[i].getAttribute('data-modal') === 'true' && !windows[i].classList.contains(modal)) {
							windows[i].classList.remove('modal-active')
							windows[i].setAttribute('data-modal', 'false')
							// show modal
						} if (windows[i].getAttribute('data-popup') === currentItem) {
							windows[i].classList.add('modal-active')
							body.classList.add('lock')  //remove scroll on body
							body.style.marginRight = `${scroll}px`  //remove scroll on body
							windows[i].setAttribute('data-modal', 'true')

						}
					} //hide popap opend before
					if (e.target) {
						e.preventDefault()
					}
				})
			})
		}

		// hide unnecessary effects while opening the window
		function calcScroll() {
			let div = document.createElement('div')
			div.style.width = '50px'
			div.style.height = '50px'
			div.style.overflowY = 'scroll'
			div.style.vidibility = 'hidden'

			document.body.appendChild(div)
			let scrollWidth = div.offsetWidth - div.clientWidth
			div.remove()

			return scrollWidth
		}



		// hide modal when  click on the escape
		document.addEventListener('keydown', function (event) {
			const keycode = event.keyCode;
			if (keycode === 27) {
				if (windows) {
					windows.forEach(item => {
						item.classList.remove('modal-active')
						body.classList.remove('lock') //add scroll on body 
						body.style.marginRight = `0px` 
						item.setAttribute('data-modal', false)
					})

				}

			}
		});

		// hide modal when  click on close button
		for (let i = 0; i < close.length; i++) {
			let clickItem = close[i]
			if (windows) {
				windows.forEach(item => {
					clickItem.addEventListener('click', function () {
						item.classList.remove('modal-active')
						body.classList.remove('lock') //add scroll on body
						body.style.marginRight = `0px` 
						item.setAttribute('data-modal', false)
					})
				})
			}
		}

		// hide modal when click on space around modal
		if (windows) {
			windows.forEach(item => {
				item.addEventListener('click', function (e) {
					if (e.target === item) {
						item.classList.remove('modal-active')
						body.classList.remove('lock') //add scroll on body
						body.style.marginRight = `0px` 
						item.setAttribute('data-modal', false)

					}
				})
			})
		}
	}
	toggleModal()

	// turn on function "formsend" during event submit

	// send data to mail
	function sendLetter() {
		const form = $(".request-form")
		if (form) {

			$(".request-form").submit(function (e) { //Change
				const form = document.querySelector(".request-form")
				e.preventDefault()
				var th = $(this)
				form.classList.add('sending')
				$.ajax({
					type: "POST",
					url: "mail.php", //Change
					data: th.serialize()
				}).done(function () {
					form.classList.remove('sending')
					alert("Спасибо за заявку")
					setTimeout(function () {
						form.reset()
						// Done Functions
						th.trigger("reset")
					}, 1000)
				});
				return false
			});
		}
	}


	sendLetter()
	// 	form.addEventListener('submit', formsend)
	// 		async function formsend(e){
	// 		e.preventDefault()
	// 		let formdata = new FormData(form)
	// 		form.classList.add('sending')
	// 		let response = await fetch('sendmail.php', {
	// 			method: 'POST',
	// 			body: formdata
	// 		})
	// 		if (response.ok) {
	// 			let result = await response.json()
	// 			alert(result.message)
	// 			form.reset()
	// 			form.classList.remove('sending')
	// 		} else {
	// 			alert("Что-то пошло не так")
	// 			form.reset()
	// 			form.classList.remove('sending')
	// 		}
	// 	}
	// 	}


	// move to top of screen
	$('.top-arrow').click(function () {
		$('html, body').css('scrollTop', '0')
	});


	// show or hide top-arrow during scroll
	$(window).scroll(function () {
		const $top = $('.top-arrow')
		if ($(this).scrollTop() > 20) {
			$top.fadeIn()
		} else {
			$top.fadeOut()
		}
	});

	// validate  input type="email"
	function updateInput() {
		// regular expression for check correct fill input
		const email_regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		// all inputs type="email"
		const inputs = document.querySelectorAll('[type="email"]');
		if (inputs) {
			for (let i = 0; i < inputs.length; i++) {
				const item = inputs[i]
				item.addEventListener('input', function () {
					if (validateEmail(item.value)) item.style.borderColor = 'green';
					else item.style.borderColor = 'red';
				});
			}
		}

		// check correct fill input
		function validateEmail(value) {
			return email_regexp.test(value);
		}
	}

	updateInput()

	// check correct fill of inputs type="tel" (only numbers or pluses)
	function validatePhone() {
		const phoneInputs = document.querySelectorAll('input[type="tel"]')
		const goodKey = '0123456789+ ';

		const checkInputTel = function (e) {
			const key = (typeof e.which == "number") ? e.which : e.keyCode;
			var start = this.selectionStart,
				end = this.selectionEnd;

			const filtered = this.value.split('').filter(filterInput);
			this.value = filtered.join("");

			/* Prevents moving the pointer for a bad character */
			const move = (filterInput(String.fromCharCode(key)) || (key == 0 || key == 8)) ? 0 : 1;
			this.setSelectionRange(start - move, end - move);
		}

		const filterInput = function (val) {
			return (goodKey.indexOf(val) > -1);
		}


		if (phoneInputs) {
			phoneInputs.forEach(item => {
				item.addEventListener('input', checkInputTel);
			})
		}
	}

	validatePhone()	


	

});
