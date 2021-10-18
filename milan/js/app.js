$(function () {

	// show or hide modal windows
	function toggleModal(modalSelector, triggerSelector, closeSelector) {
		let body = document.querySelector('body');
		const modal = document.querySelector(modalSelector)
		const trigger = document.querySelector(triggerSelector)
		const close = document.querySelectorAll(closeSelector)
		let menu = document.querySelector('.header__nav');
		const header = document.querySelector('.header')
		const windows = document.querySelectorAll('.modal') //all modal windows
		scroll = calcScroll()

		// show modal on click
		trigger.addEventListener('click', function (e) {
			for (let i = 0; i < windows.length; i++) {
				if (windows[i].getAttribute('data-modal') === 'true' && !windows[i].classList.contains(modal)) {
					windows[i].classList.remove('modal-active')
					windows[i].setAttribute('data-modal', 'false')
				}
			} //hide popap opend before
			if (e.target) {
				e.preventDefault()
			}
			modal.classList.add('modal-active')
			body.classList.add('lock')  //remove scroll on body
			body.style.marginRight = `${scroll}px`  
			modal.setAttribute('data-modal', 'true')
			header.style.left = `-8px`

		})

		// hide modal when  click on the escape
		document.addEventListener('keydown', function (event) {
			const keycode = event.keyCode;
			if (keycode === 27) {
				modal.classList.remove('modal-active')
				body.classList.remove('lock') //add scroll on body 
				body.style.marginRight = `0px` 
				header.style.left = '0px'
				modal.setAttribute('data-modal', false)
				if (menu.classList.contains('active')) {
					body.classList.add('lock')
				}
			}
		});

		// hide modal when  click on close button
		for (let i = 0; i < close.length; i++) {
			let clickItem = close[i]
			clickItem.addEventListener('click', function () {
				modal.classList.remove('modal-active')
				body.classList.remove('lock') //add scroll on body
				modal.setAttribute('data-modal', false)
				body.style.marginRight = `0px` 
				header.style.left = '0px'
				if (menu.classList.contains('active')) {
					body.classList.add('lock')
				}
			})
		}

		// hide modal when click on space around modal
		modal.addEventListener('click', function (e) {
			if (e.target === modal) {
				modal.classList.remove('modal-active')
				body.classList.remove('lock') //add scroll on body
				modal.setAttribute('data-modal', false)
				header.style.left = '0px'
				body.style.marginRight = `0px` 
				if (menu.classList.contains('active')) {
					body.classList.add('lock')
				}
			}
		})

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

	}

	toggleModal('.modal-entrance', '.header__entrance', '.close')
	toggleModal('.modal-registration', '.entrance-form__link', '.close')


	// a function that checks whether the browser supports  format webp and, depending on this, substitutes the required picture
	function canUseWebp() {
		// created element canvas
		let elem = document.createElement('canvas');
		if (!!(elem.getContext && elem.getContext('2d'))) {
			// created element webp
			return elem.toDataURL('mainBg.webp').indexOf('data:mainBg/webp') == 0;
		}
		// else Webp don't use
		return false;
	}

	// get all elements with data-attribute 'data-bg'
	let images = document.querySelectorAll('[data-bg]');
	// check each element
	for (let i = 0; i < images.length; i++) {
		// get value each of element 
		let image = images[i].getAttribute('data-bg');
		// each element add value backgroundImage in jpg format
		images[i].style.backgroundImage = 'url(' + image + ')';
	}

	// check use browser Firefox or not and get it version
	let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
	let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

	if (canUseWebp() || firefoxVer >= 65) {
		// do the same for webp
		let imagesWebp = document.querySelectorAll('[data-bg-webp]');
		for (let i = 0; i < imagesWebp.length; i++) {
			let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
			imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
		}
	}

	// //clear all settitngs of button on click
	function clearSettings(e) {
		const button = document.querySelector('.main__button');
		if (button) {
			button.addEventListener('click', function (e) {
				e.preventDefault()
			})
		}


	}

	clearSettings()
	// open or close mobile menu
	let brg_btn = document.querySelector('.hamburger');
	brg_btn.onclick = function () {
		let menu = document.querySelector('.header__nav');
		let blockRight = document.querySelector('.header__block--right')
		let body = document.querySelector('body');
		brg_btn.classList.toggle('is-active')
		menu.classList.toggle('active')
		body.classList.toggle('lock')  //remove scroll on body
	}

	// hide adaptiv menu on click element of menu	
	function hideMenu() {
		let menuEl = document.querySelectorAll('.header__menu-el-nav');
		let blockRight = document.querySelector('.header__block--right')
		let body = document.querySelector('body');
		let menu = document.querySelector('.header__nav');
		for (let i = 0; i < menuEl.length; i++) {
			let clickItem = menuEl[i]
			clickItem.onclick = function () {
				brg_btn.classList.remove('is-active')
				menu.classList.remove('active')
				body.classList.remove('lock')  //remove scroll on body
				blockRight.classList.remove('hide')
			}
		}
	}

	hideMenu()

	// open or close input for search
	let search_btn = document.querySelector('.search__button')
	search_btn.addEventListener('click', function (e) {
		let search_input = document.querySelector('.search__input')
		e.preventDefault()
		search_input.classList.toggle('active')
		// add animation
		if (search_input.classList.contains('active')) {

			if (window.innerWidth < 375) {
				search_input.style.width = "102px"
			} else if (window.innerWidth < 992 && window.innerWidth > 374) {
				search_input.style.width = "112px"
			} else {
				search_input.style.width = "150px"
			}

		} else {
			search_input.style.width = "0px"
		}
	})

		// hide search on click space around
		document.addEventListener('click', function(e){
			let search_input = document.querySelector('.search__input')
			const target = e.target
			if(!target.closest('.header__form')){
				search_input.classList.remove('active')
				search_input.style.width = "0"
			}	
		})

	// created gallery of images when click on the picture
	$('.categories__img').magnificPopup({
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

	// sliders

	// get count of sliders and current slider and show it on the screen
	function showSlidersInfo() {
		let $status = $('.novelty__info');  //element where values are written
		let $slickElement = $('.novelty__sliders'); //slide

		$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			let i = (currentSlide ? currentSlide : 0) + 1;
			$status.text(i + '/' + slick.slideCount);
		});
	}

	showSlidersInfo()

	$('.novelty__sliders').slick({
		arrows: true,
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1170,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true

				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 570,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	})

	// send form to server

	function forms() {
		const form = document.querySelectorAll('form')
		const inputs = document.querySelectorAll('.input')
		const registrationForm = document.querySelector('.registration__form')
		const formPreview = document.getElementById('filePreview')


		const message = {
			entranceSuccess: 'Вход выполнен',
			registrationSuccess: 'Регистрация прошла успешно',
			failure: 'Что-то пошло не так'
		}

		// send formData
		async function postData(url, data) {
			// add message 'loading' in formData 
			for (let i = 0; i < form.length; i++) {
				const current = form[i]
				current.classList.add('sending')
			}
			// setting send to mail
			let res = await fetch(url, {
				method: 'Post',
				body: data
			})
			return await res.text()
		}

		function clearInputs() {
			for (let i = 0; i < inputs.length; i++) {
				inputs[i].value = ''
			}
			formPreview.innerHTML = ''
		}
		// append formData in form 
		for (let i = 0; i < form.length; i++) {
			const item = form[i]
			item.addEventListener('submit', function (e) {
				e.preventDefault()
				let statusMessage = document.createElement('div')
				statusMessage.classList.add('status')
				item.appendChild(statusMessage)
				const formData = new FormData(item)
				formData.append('image', formImage.files[0])
				postData('server.php', formData)
					.then(function (res) {
						for (let i = 0; i < form.length; i++) {
							const current = form[i]
							current.classList.remove('sending')
						}
						if (item === registrationForm) {
							statusMessage.textContent = message.registrationSuccess
						} else {
							statusMessage.textContent = message.entranceSuccess
						}
					})
					.catch(function () { statusMessage.textContent = message.failure })
					.finally(function () {
						clearInputs();
						setTimeout(function () {
							statusMessage.remove()
						}, 5000)
					})
			})
		}
	}

	forms()


	formImage.addEventListener('change', function () {
		uploadFile(formImage.files[0])
	})
	function uploadFile(file) {
		// get input file
		const formImage = document.getElementById('formImage')
		// get div for Preview image
		const formPreview = document.getElementById('filePreview')
		// check file type
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Разрешены только изображения.')
			formImage.value = ''
			return
		}
		// check size of file (< 2mb)
		if (file.size > 2 * 1024 * 1024) {
			alert("Файл не долен быть больше 2 Мб.")
			return
		}

		let reader = new FileReader()
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt='Фото'>`
		}
		reader.onerror = function (e) {
			alert('Ошибка')
		}
		reader.readAsDataURL(file)
	}




	// compare fields 'password' and 'repeat password' and show message if fills not equal 
	function validatePassword() {
		let pass2 = document.getElementById("passwordReg").value;
		let pass1 = document.getElementById("repeat-password").value;
		if (pass1 != pass2)
			document.getElementById("repeat-password").setCustomValidity("Пароль не совпадает");
		else
			document.getElementById("repeat-password").setCustomValidity('');
		//empty string means no validation error
	}

	document.getElementById("passwordReg").onchange = validatePassword;
	document.getElementById("repeat-password").onchange = validatePassword;

	// validate  input type="email"
	function updateInput() {
		// regular expression for check correct fill input
		const email_regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		// all inputs type="email"
		const inputs = document.querySelectorAll('[type="email"]');
		for (let i = 0; i < inputs.length; i++) {
			const item = inputs[i]
			item.addEventListener('input', function () {
				if (validateEmail(item.value)) item.style.borderColor = '#fff';
				else item.style.borderColor = 'red';
			});
		}
		// check correct fill input
		function validateEmail(value) {
			return email_regexp.test(value);
		}
	}

	updateInput()

	// provide smooth transition to section
	function goToSection() {
		// get all elements with attibute data-goto
		const menuLinks = document.querySelectorAll('.header__link[data-goto]')
		if (menuLinks.length > 0) { //add click on each element
			for (let i = 0; i < menuLinks.length; i++) {
				const clickItem = menuLinks[i]
				clickItem.addEventListener('click', onMenuClick)
			}
			function onMenuClick(e) { //do smooth transition to section
				const menuLink = e.target
				if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
					const gotoBlock = document.querySelector(menuLink.dataset.goto)
					const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__row').offsetHeight
					window.scrollTo({
						top: gotoBlockValue,
						behavior: "smooth"
					})
				}
				e.preventDefault()
			}
		}
	}

	goToSection()

	// open or close select list when click select window and change input value
	function toggleSelect() {
		const clickItem = document.querySelector('.entrance-form__select-window')
		const list = document.querySelector('.entrance-form__select-list')
		const selectElements = document.querySelectorAll('.entrance-form__list-item')
		const arrow = document.querySelector('.fa')
		clickItem.onclick = function () {
			list.classList.toggle('active') //open select menu
			arrow.classList.toggle('active') //rotate select arrow
		}

		for (let i = 0; i < selectElements.length; i++) { //check all elements of select list
			const trigger = selectElements[i] //get click element
			trigger.addEventListener('click', function (e) {
				let inputValue = document.getElementById('selectInput')
				const currentValue = e.target.textContent
				inputValue.value = currentValue
				list.classList.remove('active')
				arrow.classList.remove('active')
			})
		}

	}
	toggleSelect()



	// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	// Получение слойлеров с медиа запросами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
		return item.dataset.spollers.split(",")[0];
	});

	// Инициализация слойлеров с медиа запросами
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];
		spollersMedia.forEach(item => {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});

		// Получаем уникальные брейкпоинты
		let mediaQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mediaQueries = mediaQueries.filter(function (item, index, self) {
			return self.indexOf(item) === index;
		});

		// Работаем с каждым брейкпоинтом
		mediaQueries.forEach(breakpoint => {
			const paramsArray = breakpoint.split(",");
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]);

			// Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			});
			// Событие
			matchMedia.addListener(function () {
				initSpollers(spollersArray, matchMedia);
			});
			initSpollers(spollersArray, matchMedia);
		});
	}
	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}
	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}
	// SlideToggle
	let _slideUp = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide')
			target.style.transitionProperty = 'height, margin, padding'
			target.style.transitionDuration = duration + 'ms'
			target.style.height = target.offsetHeight + 'px'
			target.offsetHeight
			target.style.overflow = 'hidden'
			target.style.height = 0
			target.style.paddingTop = 0
			target.style.paddingBottom = 0
			target.style.marginBottom = 0
			target.style.marginBottom = 0
			window.setTimeout(() => {
				target.hidden = true
				target.style.removeProperty('height')
				target.style.removeProperty('padding-top')
				target.style.removeProperty('padding-bottom')
				target.style.removeProperty('margin-top')
				target.style.removeProperty('margin-bottom')
				target.style.removeProperty('overflow')
				target.style.removeProperty('transition-duration')
				target.style.removeProperty('transition-property')
				target.classList.remove('_slide')
			}, duration)

		}
	}

	let _slideDown = (target, duration = 500) => {
		if (!target.classList.contains('_slide')) {
			target.classList.add('_slide')
			if (target.hidden) {
				target.hidden = false
			}
			let height = target.offsetHeight
			target.style.overflow = 'hidden'
			target.style.height = 0
			target.style.paddingTop = 0
			target.style.paddingBottom = 0
			target.style.marginBottom = 0
			target.style.marginBottom = 0
			target.offsetHeight
			target.style.transitionProperty = 'height, margin, padding'
			target.style.transitionDuration = duration + 'ms'
			target.style.height = height + 'px'
			target.style.removeProperty('padding-top')
			target.style.removeProperty('padding-bottom')
			target.style.removeProperty('margin-top')
			target.style.removeProperty('margin-bottom')

			window.setTimeout(() => {
				target.style.removeProperty('height')
				target.style.removeProperty('overflow')
				target.style.removeProperty('transition-duration')
				target.style.removeProperty('transition-property')
				target.classList.remove('_slide')
			}, duration)

		}
	}
	let _slideToggle = (target, duration = 500) => {
		if (target.hidden) {
			return _slideDown(target, duration)
		} else {
			return _slideUp(target, duration)
		}
	}


	// add goods to cart
	function addToCart() {
		const trigger = document.querySelectorAll('.button__buy')
		if (trigger.length !== 0) {
			trigger.forEach(item => {
				item.onclick = function (e) {
					e.preventDefault()
					const productButton = e.target
					const productId = productButton.closest('.item-product').dataset.pid
					if (!productButton.classList.contains('_hold')) {
						productButton.classList.add('_hold')
						productButton.classList.add('_fly')

						const cart = document.querySelector('.header__cart')
						const product = document.querySelector(`[data-pid="${productId}"]`)
						const productImage = product.querySelector('.cart__image')
						const productImageFly = productImage.cloneNode(true)
						const productImageFlyWidth = productImage.offsetWidth
						const productImageFlyHeight = productImage.offsetHeight
						const productImageFlyTop = productImage.getBoundingClientRect().top
						const productImageFlyLeft = productImage.getBoundingClientRect().left

						productImageFly.setAttribute('class', '_flyimage _ibg')
						productImageFly.style.cssText =
							`
						left: ${productImageFlyLeft}px;
						top: ${productImageFlyTop}px; 
						width: ${productImageFlyWidth}px; 
						height: ${productImageFlyHeight}px; 
						`

						document.body.append(productImageFly)

						const cartFlyTop = cart.getBoundingClientRect().top
						const cartFlyLeft = cart.getBoundingClientRect().left

						productImageFly.style.cssText =
							`
						left: ${cartFlyLeft}px;
						top: ${cartFlyTop}px; 
						width: 0;
						height: 0;
						opacity: 0;
						`
						productImageFly.addEventListener('transitionend', function () {
							if (productButton.classList.contains('_fly')) {
								productImageFly.remove()
								updateCart(productButton, productId)
								productButton.classList.remove('_fly')
							}
						})
					}



				}
			})

		}

	}

	// delete cart item 
	function deleteItemCart() {
		document.addEventListener('click', function (e) {
			const target = e.target
			if (target.classList.contains('cart-list__delete')) {
				const productId = target.closest('.cart-list__item').dataset.cartPid
				updateCart(target, productId, false)
				e.preventDefault()
			}
		})
	}

	deleteItemCart()



	function updateCart(productButton, productId, productAdd = true) {
		const cart = document.querySelector('.cart-header')
		const cartBody = document.querySelector('.cart-header__body')
		const cartIcon = cart.querySelector('.header__cart')
		const cartAmount = cartIcon.querySelector('span')
		const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`)
		const cartList = document.querySelector('.cart-list')

		if (productAdd) {    //add product to cart
			if (cartAmount) {
				cartAmount.innerHTML = ++cartAmount.innerHTML
			} else {
				cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`)
			}
			if (!cartProduct) {
				const product = document.querySelector(`[data-pid="${productId}"]`)
				const cartProductImage = product.querySelector('.cart__image').innerHTML
				const cartProductName = product.querySelector('.cart__name').innerHTML
				const cartProductPrice = product.querySelector('.cart__price').innerHTML
				const cartProductContent =
					`
								<a href="#" class='cart-list__image'>${cartProductImage}</a>
								<div class="cart-list__body">
									<a href="#" class='cart-list__name'>${cartProductName}</a>
									<a href="#" class='cart-list__price'>${cartProductPrice}</a>
									<div class='cart-list__amounth'>Amount: <span>1</span></div>
									<a href="#" class='cart-list__delete'>Delete</a>
								</div>	
								`
				cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`)
			} else {
				const cartProductAmounth = cartProduct.querySelector(".cart-list__amounth span")
				cartProductAmounth.innerHTML = ++cartProductAmounth.innerHTML
			}
			productButton.classList.remove('_hold')
		} else {   //delete item to cart
			const cartProductAmount = cartProduct.querySelector('.cart-list__amounth span')
			cartProductAmount.innerHTML = --cartProductAmount.innerHTML
			if (!parseInt(cartProductAmount.innerHTML)) {
				cartProduct.remove()
				if (document.querySelectorAll('.cart-list__item').length > 0) {
					document.querySelector('.cart-header__body').classList.add('active')
				}
			}
			const cartAmountValue = --cartAmount.innerHTML
			if (cartAmountValue) {
				cartAmount.innerHTML = cartAmountValue
			} else {
				cartAmount.remove()
				cartBody.classList.remove('active')
			}
		}
	}

	addToCart()

	// open or close cart list
	function toggleCartList() {
		const trigger = document.querySelector('.header__cart')
		document.addEventListener('click', function (e) {
			const current = e.target
			if (current && current.closest('.header__cart')) {
				e.preventDefault()

				if (document.querySelector('.cart-list').children.length > 0) {
					document.querySelector('.cart-header__body').classList.toggle('active')
				}
			}
			else if (!current.closest('.cart-header') && !current.classList.contains('button__buy') && !current.classList.contains('cart-list__delete')) {
				document.querySelector('.cart-header__body').classList.remove('active')
			}
		})
	}
	toggleCartList()




});

new WOW().init(); //add wow.js library


