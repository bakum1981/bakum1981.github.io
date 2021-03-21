/**
	 * NodeList.prototype.forEach() polyfill
	 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
	 */
	// if (window.NodeList && !NodeList.prototype.forEach) {
	// 	NodeList.prototype.forEach = function (callback, thisArg) {
	// 		thisArg = thisArg || window;
	// 		for (var i = 0; i < this.length; i++) {
	// 			callback.call(thisArg, this[i], i, this);
	// 		}
	// 	};
	// }

	
	// sliders
	// $('.sliders').slick({
	//   arrows: false,	
	//   dots: true,
	//   infinite: true,
	//   speed: 300,
	//   slidesToShow: 1,
	//   adaptiveHeight: true
	// })

	// $('.cranberry__sliders').slick({		
	//   arrows: true,	
	//   dots: true,
	//   infinite: true,
	//   speed: 300,
	//   slidesToShow: 1,
	//   adaptiveHeight: true
	// })

	// open or close input for search
	// let search_btn = document.querySelector('.search__button')
	// search_btn.addEventListener('click', function(e){
	// 	let search_input = document.querySelector('.search__input')
	// 	e.preventDefault()
	// 	search_input.classList.toggle('active')
	// })


	// show the level to the scroll
	// function progressBar(e){
	// 	const progress = document.querySelector('.progress')			
	// 	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	// 	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	// 	let per = windowScroll / windowHeight * 100;
	// 	progress.style.width = per + '%';
		
	// }
	// document.addEventListener('scroll', progressBar)

	
	// const images = document.querySelectorAll('.section__image');
	// function startRotate(event){
	// 	const halfHeight = event.target.offsetHeight / 2;
	// 	const halfWidth = event.target.offsetWidth / 2;
	// 	event.target.style.transform = 'rotateX('+-(event.offsetY - halfHeight) / 12 + 'deg) rotateY('
	// 	+ (event.offsetX - halfWidth) / 9 + 'deg)';
		
	// }

	// stop  rotates the picture in a 3d plane
	// function stopRotate(event){
	// 	event.target.style.transform = 'rotate(0)';
		
	// }

	// for(let i = 0; i < images.length; i++){
	// 	const image = images[i];
	// 	image.addEventListener('mousemove', startRotate);
	// 	image.addEventListener('mouseout', stopRotate);
	// }

	// show or hide modal windows
	// const toggleModal = (modalSelector, triggerSelector, closeSelector) => {
		let body = document.querySelector('body');	
		const ordButton = document.querySelector('.order__button')
		const modal = document.querySelector(modalSelector)
		const trigger = document.querySelector(triggerSelector)
		const close = document.querySelectorAll(closeSelector)
		let menu = document.querySelector('.header__nav');
		const windows = document.querySelectorAll('.modal') //all modal windows
	// 	// show modal on click
		// trigger.addEventListener('click', (e) =>  {
		// 	for(let i=0; i<windows.length; i++){
		// 		if(windows[i].getAttribute('data-modal') === 'true' && !windows[i].classList.contains(modal)){
		// 			windows[i].classList.remove('modal-active')
		// 			windows[i].setAttribute('data-modal', 'false')
		// 		}
		// 	} //hide popap opend before
		// 	if(e.target){
		// 		e.preventDefault()
		// 	}			
		// 	modal.classList.add('modal-active')
		// 	body.classList.add('lock')  //remove scroll on body
		// 	ordButton.style.zIndex = '-1' //hide button under popap
		// 	modal.setAttribute('data-modal', 'true')

		// })

		//  hide modal when  click on the escape
		// document.addEventListener('keydown', (event) => {
 	// 	 const keycode= event.keyCode;
 	// 	 if(keycode === 27){
 	// 	 	modal.classList.remove('modal-active')
 	// 	 	body.classList.remove('lock') //add scroll on body 
 	// 	 	ordButton.style.zIndex = '1'
 	// 	 	modal.setAttribute('data-modal', false) 
 	// 	 	if(menu.classList.contains('active')){
 	// 	 		body.classList.add('lock')
 	// 	 	}
 	// 	 }
		// });

		// hide modal when  click on close button
		// close.forEach(item => {
		// 	item.addEventListener('click', () => {
		// 		modal.classList.remove('modal-active')
		// 		body.classList.remove('lock') //add scroll on body
		// 		ordButton.style.zIndex = '1'
		// 		modal.setAttribute('data-modal', false)
		// 		if(menu.classList.contains('active')){
		// 			body.classList.add('lock')
		// 		}
		// 	})  
		// })

		// hide modal when click on space around modal
	// 	modal.addEventListener('click', (e) => {
	// 		if(e.target === modal){
	// 			modal.classList.remove('modal-active')
	// 			body.classList.remove('lock') //add scroll on body
	// 			ordButton.style.zIndex = '1'
	// 			modal.setAttribute('data-modal', false)
	// 			if(menu.classList.contains('active')){
	// 				body.classList.add('lock')
	// 			}
	// 		}
	// 	})

	// }

	// toggleModal('.modal-registration', '.registration-link', '.close')	
	// toggleModal('.modal-entrance', '.header__entrance', '.close')	
	// toggleModal('.modal-entrance', '.header__entrance--adaptiv', '.close')	
	// toggleModal('.modal-cranberry', '.cranberry__show-more', '.close')	
	// toggleModal('.modal-banana', '.banana__show-more', '.close')
	// toggleModal('.modal-registration', '.entrance-form__link', '.close')


	// send form to server

	// const forms = () => {
	// 	const form = document.querySelectorAll('form')
	// 	const inputs = document.querySelectorAll('.input')
	// 	const phoneInputs = document.querySelectorAll('input[type="tel"]')
	// 	const registrationForm = document.querySelector('.registration__form')
	// 	const orderForm = document.querySelector('.order__form')

	// 	phoneInputs.forEach(item => {
	// 		item.addEventListener('input', () => {
	// 			item.value = item.value.replace(/\D/, '')
	// 		})
	// 	})
	// 	const message = {
	// 		loading: 'Загрузка...',
	// 		entranceSuccess: 'Вход выплнен',
	// 		registrationSuccess: 'Регистрация прошла успешно',						
	// 		orderSuccess: 'Заказ отправлен, с вами свяжутся',						
	// 		failure: 'Что-то пошло не так'
	// 	}

		// send formData
		// const postData = async (url, data) => {
		// 	// add message 'loading' in formData 
		// 	document.querySelector('.status').textContent = message.loading
		// 	// setting send to mail
		// 	let res = await fetch(url, {
		// 		method: 'Post',
		// 		body: data
		// 	})
		// 	return await res.text()
		// }

		// const clearInputs = () => {
		// 	inputs.forEach(item => {
		// 		item.value = ''
		// 	})
		// }

		// append formData in form 
	// 	form.forEach(item => {
	// 		item.addEventListener('submit', (e) => {
	// 			e.preventDefault()
	// 			let statusMessage = document.createElement('div')
	// 			statusMessage.classList.add('status')
	// 			item.appendChild(statusMessage)
	// 			const formData = new FormData(item)
	// 			postData('server.php', formData)
	// 				.then(res => {
	// 					if(item === registrationForm){
	// 						statusMessage.textContent = message.registrationSuccess
	// 					}else if(item === orderForm){
	// 						statusMessage.textContent = message.orderSuccess
	// 				 	}else{
	// 						statusMessage.textContent = message.entranceSuccess
	// 				 	}
	// 				})
	// 				.catch(() => statusMessage.textContent = message.failure)
	// 				.finally(() => {
	// 					clearInputs();
	// 					setTimeout(() => {
	// 						statusMessage.remove()
	// 					}, 5000)	
	// 				})
	// 		})
	// 	})
	// }

	// forms()
		
	
	// const validatePassword = () => {
	// 	let pass2=document.getElementById("passwordReg").value;
	// 	let pass1=document.getElementById("repeat-password").value;
	// 	if(pass1!=pass2)
	// 	    document.getElementById("repeat-password").setCustomValidity("Пароль не совпадает");
	// 	else
	// 	    document.getElementById("repeat-password").setCustomValidity('');
	// 	//empty string means no validation error
	// }

	// 	document.getElementById("passwordReg").onchange = validatePassword;
	//     document.getElementById("repeat-password").onchange = validatePassword;
