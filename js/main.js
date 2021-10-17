window.onload = function() {

	



	if (document.querySelectorAll('.slider-block__items').length > 0) {
		new Swiper('.slider-block__items', {
					// включить параллакс
					parallax: true,
					speed: 2000,
					//стрелки
					navigation: {
						nextEl: '.button-next',
						prevEl: '.button-prev'
					},
					pagination: {
						el: ".swiper-pagination",

						// Фракция
						type: 'fraction',
						renderFraction: function (currentClass, totalClass) {
							return '<span class="' + currentClass + '"></span>' +
							'<span class="' + totalClass + '"></span>';
						},
						formatFractionCurrent: addZero,
						formatFractionTotal: addZero,
					},
					// количество слайдов для показа
					slidesPerView: 1,

					// Автовысота
					// autoHeight: true,

				});
	}
			// addZero to fraction value
			function addZero(num) {
				return (num > 9) ? num : '0' + num;
			}

			// set disabled style to fraction value
			function setDisabled() {
				document.querySelector('.swiper-pagination-current').classList.add('_disabled')
				document.querySelectorAll('.button-arrow').forEach(item => {
					item.onclick = function () {
						if (document.querySelector('.swiper-pagination-current').innerHTML === document.querySelector('.swiper-pagination-total').innerHTML) {
							document.querySelector('.swiper-pagination-total').classList.add('_disabled')
						} else {
							document.querySelector('.swiper-pagination-total').classList.remove('_disabled')
						}
						if (document.querySelector('.swiper-pagination-current').innerHTML === '01') {
							document.querySelector('.swiper-pagination-current').classList.add('_disabled')
						} else {
							document.querySelector('.swiper-pagination-current').classList.remove('_disabled')
						}
					}
				})
			}

			// setDisabled()
			if (document.querySelectorAll('.royal-slider__items').length > 0) {
				const royalSlider = new Swiper('.royal-slider__items', {
					// стрелки
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					parallax: true,

					speed: 2000,
					autoHeight: true,
					// // пагинация
					pagination: {
						el: ".swiper-pagination",
						type: 'progressbar'
					},

					// количество слайдов для показа
					slidesPerView: 1,

					// // Автовысота
					// autoHeight: true,

				});

				let mySliderCurrentSlide = document.querySelectorAll('.royal-slider__current')

				royalSlider.on('slideChange', function () {
					let currentSlide = ++royalSlider.realIndex
					mySliderCurrentSlide.forEach(item => {
						if (currentSlide < 10) {
							item.innerHTML = '0' + currentSlide
						} else {
							item.innerHTML = currentSlide
						}
					})

				})


			}


			
			if (document.querySelectorAll('.featured__row').length > 0) {
				// Инициализируем Swiper
				let featured_slider = new Swiper('.featured__row', {

					// Включение/отключение
					// перетаскивания на ПК
					simulateTouch: false,
					// Навигация 
					// Буллеты, текущее положение, прогрессбар
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
						
					},

					// Автовысота
					autoHeight: false,

					// Количество слайдов для показа
					// slidesPerView: 4,



					// Количество пролистываемых слайдов
					slidesPerGroup: 1,


					// Бесконечный слайдер
					loop: false,



					// Скорость
					speed: 800,


					// Брейк поинты (адаптив)
					// // Ширина экрана
					breakpoints: {
						320: {
							slidesPerView: 1.5,
						},
						750: {
							slidesPerView: 2.5,
						},
						1050: {
							slidesPerView: 3.5,
						},
						1200: {
							slidesPerView: 4,
						}
					},


				});
			}

			if (document.querySelectorAll('.reviews__row').length > 0) {
				// Инициализируем Swiper
				let reviews_slider = new Swiper('.reviews__row', {

					// Включение/отключение
					// перетаскивания на ПК
					simulateTouch: false,
					// Навигация 
					// Буллеты, текущее положение, прогрессбар
					pagination: {
						el: ".swiper-pagination",
						type: "progressbar"
						// Прогрессбар
					},

					// Автовысота
					autoHeight: true,

					// Количество слайдов для показа
					slidesPerView: 3,



					// Количество пролистываемых слайдов
					slidesPerGroup: 1,


					// Бесконечный слайдер
					loop: false,



					// Скорость
					speed: 800,

					// Брейк поинты (адаптив)
					// Ширина экрана
					breakpoints: {
						320: {
							slidesPerView: 1,
						},
						480: {
							slidesPerView: 2,
						},
						992: {
							slidesPerView: 3,
						}
					},


				});
			}

			if (document.querySelectorAll('.row-reviews').length > 0) {
				// Инициализируем Swiper
				let reviews_slider = new Swiper('.row-reviews', {

					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					// Автовысота
					autoHeight: true,

					// Количество слайдов для показа
					slidesPerView: 3,



					// Количество пролистываемых слайдов
					slidesPerGroup: 1,


					// Бесконечный слайдер
					loop: true,



					// Скорость
					speed: 800,


					// Брейк поинты (адаптив)
					// Ширина экрана
					breakpoints: {
						320: {
							slidesPerView: 1,
							autoHeight: false,
						},
						480: {
							slidesPerView: 2,
						},
						992: {
							slidesPerView: 3,
						}
					},


				});
			}

			
			
			if(window.innerWidth < 769 ) {
				new Masonry(document.getElementById("masonry"), {
					responsive: {
						0: {
							columns: 1,
							gap: 20
						},
						324: {
							columns: 2,
							gap: 20
						},
						1e3: {
							columns: 2,
							gap: 20
						}
					}

				})


			}

			
		}


		document.addEventListener('DOMContentLoaded', () => {
			
			const setBackground = () =>  {
				const percent = document.querySelectorAll('.rating-value__background')
				if(document.querySelectorAll('.order-bottom__column--product').length > 0) {
					if(document.querySelector('.order-bottom__column--product').getBoundingClientRect().top < 100) {
						document.querySelectorAll('.rating-value__background').forEach((el, index) => {
							const element = el 
							const ind = index
							percent.forEach((item, number) => {
								const val = item.dataset.percent
								const num = number
								if(ind === num) {
									element.style.width = `${val}%`

								}
								document.removeEventListener('scroll', setBackground)
							}) 

						})

					}
				}
				
			}



			document.addEventListener('scroll', setBackground)

			function isIE() {
				ua = navigator.userAgent;
				var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
				return is_ie;
			}

			const headerElement = document.querySelector(".header")
			const headerLogo = document.querySelector(".header__row")
			const navMenu = document.querySelector(".header__nav")


			const callback = function (entries, observer) {
				if (entries[0].isIntersecting) {
					headerLogo.classList.remove('_scroll')
					navMenu.classList.remove('_hidden')
				} else {
					headerLogo.classList.add('_scroll')
					navMenu.classList.add('_hidden')
				}
			};


			const headerObserver = new IntersectionObserver(callback);
			headerObserver.observe(headerElement);


			document.querySelector('.header__button').onclick = function () {
				document.querySelector('.header__nav-hidden').classList.toggle('_active')
				document.querySelector('body').classList.toggle('lock')
				if (!isMobile.any()) {
					if (document.querySelector('.header__nav-hidden').classList.contains('_active')) {
						document.querySelector('.header__wrapper').style.left = "-8.5px"
						document.querySelector('.header__menu').style.left = "-9px"
						document.querySelector('body').style.marginLeft = "-17px"
					} else {
						document.querySelector('.header__wrapper').style.left = "0"
						document.querySelector('body').style.marginLeft = "0"
						document.querySelector('.header__menu').style.left = "0"
					}
				}

			}

	// ibg
	function ibg() {
		if (isIE()) {
			let ibg = document.querySelectorAll("._ibg");
			for (var i = 0; i < ibg.length; i++) {
				if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
					ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
				}
			}
		}
	}
	ibg();



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

	let _slideDown = (target, duration = 100) => {
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
	let _slideToggle = (target, duration = 300) => {
		if (target.hidden) {
			return _slideDown(target, duration)
		} else {
			return _slideUp(target, duration)
		}
	}


	// defind whats device

	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if (isMobile.any()) {
		document.body.classList.add('_touch')
	} else {
		document.body.classList.add('_pc')
	}

	// open or close submenu on click
	document.addEventListener('click', documentActions)
	function documentActions(e) {
		const targetElement = e.target
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('header__arrow')) {
				// open or close submenu

				targetElement.closest('.header__menu-item').classList.toggle('_hover')
			}
			if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item._hover').length > 0) {
				document.querySelectorAll('.header__menu-item').forEach(item => {
					item.classList.remove('_hover')
				})
			}
		}
	}


	// decreise or increise amount and price for product
	const addItem = (quantity, sum) => {
		let amount = document.getElementById(quantity)
		if (amount) {
			let count = +amount.innerHTML;
			document.querySelector(sum).innerHTML = count * document.querySelector(sum).innerHTML

			if (document.querySelector(".calc-counter__plus")) {
				document.querySelector(".calc-counter__plus").onclick = function () {
					count++
					amount.textContent = count
					let sumOne = +document.querySelector(sum).innerHTML + (document.querySelector(sum).innerHTML / (count - 1))
					document.querySelector(sum).innerHTML = sumOne.toFixed(2)
				}
			}
			if (document.querySelector(".calc-counter__minus")) {
				document.querySelector(".calc-counter__minus").onclick = function () {
					if (count > 1) {
						count--
						let sumTwo = +document.querySelector(sum).innerHTML - (document.querySelector(sum).innerHTML / (count + 1))
						amount.textContent = count;
						document.querySelector(sum).innerHTML = sumTwo.toFixed(2)
					}

				}
			}
		}


	}

	addItem('suplaer-amount', ".suplaer__numbers")
	// addItem('order-amount', ".span-order__sum")


	function DynamicAdapt(type) {
		this.type = type;
	}

	DynamicAdapt.prototype.init = function () {
		const _this = this;
		// массив объектов
		this.оbjects = [];
		this.daClassname = "_dynamic_adapt_";
		// массив DOM-элементов
		this.nodes = document.querySelectorAll("[data-da]");

		// наполнение оbjects объктами
		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			const data = node.dataset.da.trim();
			const dataArray = data.split(",");
			const оbject = {};
			оbject.element = node;
			оbject.parent = node.parentNode;
			оbject.destination = document.querySelector(dataArray[0].trim());
			оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
			оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.оbjects.push(оbject);
		}

		this.arraySort(this.оbjects);

		// массив уникальных медиа-запросов
		this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
			return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
		}, this);
		this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
			return Array.prototype.indexOf.call(self, item) === index;
		});

		// навешивание слушателя на медиа-запрос
		// и вызов обработчика при первом запуске
		for (let i = 0; i < this.mediaQueries.length; i++) {
			const media = this.mediaQueries[i];
			const mediaSplit = String.prototype.split.call(media, ',');
			const matchMedia = window.matchMedia(mediaSplit[0]);
			const mediaBreakpoint = mediaSplit[1];

			// массив объектов с подходящим брейкпоинтом
			const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
				return item.breakpoint === mediaBreakpoint;
			});
			matchMedia.addListener(function () {
				_this.mediaHandler(matchMedia, оbjectsFilter);
			});
			this.mediaHandler(matchMedia, оbjectsFilter);
		}
	};

	DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
		if (matchMedia.matches) {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				оbject.index = this.indexInParent(оbject.parent, оbject.element);
				this.moveTo(оbject.place, оbject.element, оbject.destination);
			}
		} else {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				if (оbject.element.classList.contains(this.daClassname)) {
					this.moveBack(оbject.parent, оbject.element, оbject.index);
				}
			}
		}
	};

	// Функция перемещения
	DynamicAdapt.prototype.moveTo = function (place, element, destination) {
		element.classList.add(this.daClassname);
		if (place === 'last' || place >= destination.children.length) {
			destination.insertAdjacentElement('beforeend', element);
			return;
		}
		if (place === 'first') {
			destination.insertAdjacentElement('afterbegin', element);
			return;
		}
		destination.children[place].insertAdjacentElement('beforebegin', element);
	}

	// Функция возврата
	DynamicAdapt.prototype.moveBack = function (parent, element, index) {
		element.classList.remove(this.daClassname);
		if (parent.children[index] !== undefined) {
			parent.children[index].insertAdjacentElement('beforebegin', element);
		} else {
			parent.insertAdjacentElement('beforeend', element);
		}
	}

	// Функция получения индекса внутри родителя
	DynamicAdapt.prototype.indexInParent = function (parent, element) {
		const array = Array.prototype.slice.call(parent.children);
		return Array.prototype.indexOf.call(array, element);
	};

	// Функция сортировки массива по breakpoint и place 
	// по возрастанию для this.type = min
	// по убыванию для this.type = max
	DynamicAdapt.prototype.arraySort = function (arr) {
		if (this.type === "min") {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return -1;
					}

					if (a.place === "last" || b.place === "first") {
						return 1;
					}

					return a.place - b.place;
				}

				return a.breakpoint - b.breakpoint;
			});
		} else {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return 1;
					}

					if (a.place === "last" || b.place === "first") {
						return -1;
					}

					return b.place - a.place;
				}

				return b.breakpoint - a.breakpoint;
			});
			return;
		}
	};

	const da = new DynamicAdapt("max");
	da.init();






	function showSearch() {
		const trigger = document.querySelector('[data-trigger]')
		const search = document.querySelector('.header__input')
		if (trigger) {
			document.addEventListener("click", (e) => {
				const target = e.target
				if (target === trigger || target.closest('[data-trigger]') || target === trigger.parentElement) {
					e.preventDefault()
					search.classList.toggle('_active')
				} else if (!target.closest('.header__input')) {
					search.classList.remove('_active')

				}

			})

		}
	}
	showSearch()


	function loadItems(selector, trigger, position) {
		if (document.querySelector(trigger)) {
			document.querySelector(trigger).onclick = function (e) {
				e.preventDefault()
				const target = e.target
				getProducts(target, selector, position)
			}
		}
	}
	loadItems('#goods-items-one', '.goods-one__subtitle-button', 'afterbegin')
	loadItems('.rare-product__items', '.rare-product__show', 'beforeEnd')

	// Load More Products
	async function getProducts(button, selector, position) {
		if (!button.classList.contains('_hold')) {
			button.classList.add('_hold');
			const file = "json/products.json";
			let response = await fetch(file, {
				method: "GET"
			});
			if (response.ok) {
				let result = await response.json();
				loadProducts(result, selector, position);
				button.classList.remove('_hold');
				button.remove();
			} else {
				alert("Ошибка");
			}
		}
	}


	function loadProducts(data, selector, position) {
		const productsItems = document.querySelector(selector);

		data.products.forEach(item => {
			const productId = item.id;
			const productUrl = item.url;
			const productImage = item.image;
			const productTitle = item.title;
			const productPrice = item.price;
			const productOldPrice = item.priceOld;
			const productAddToCart = item.buttonAdd;
			const nameUrl = item.nameUrl;

			let productTemplateStart = `<article data-pid="${productId}" class="goods-item">`;
			let productTemplateEnd = `</article>`;


			let productTemplateImage = `
			<span" class="goods-item__img">
			<img src="images/goods-one/${productImage}" alt="${productTitle}">
			</span>
			`;

			let productTemplateContentStart = `<a class="goods-item__content" href="">`;
			let productTemplateContentEnd = `</a>`;

			let productTemplateBody = `
			<div class="goods-item__body">
			${productTemplateImage}
			</div>
			`;

			let productName = `<h5 class="goods-item__name" href=${nameUrl}>${productTitle}</h5>`

			let productTemplatePrices = '';
			let productTemplatePricesStart = `<div class="goods-item__prices">`;
			let productTemplatePricesCurrent = `<div class="goods-item__price">${productPrice}</div>`;
			let productTemplatePricesOld = `<div class="goods-item__price goods-item__price--old">${productOldPrice}</div>`;
			let productTemplatePricesEnd = `</div>`;

			productTemplatePrices = productTemplatePricesStart;
			productTemplatePrices += productTemplatePricesCurrent;
			if (productOldPrice) {
				productTemplatePrices += productTemplatePricesOld;
			}
			productTemplatePrices += productTemplatePricesEnd;

			let productTemplateAdd = `
			<a class="goods-item__add" href='${productAddToCart}'>

			</a>
			`;


			let productTemplateContent = '';
			productTemplateContent += productTemplateContentStart;
			productTemplateContent += productTemplateBody;
			productTemplateContent += productName;
			productTemplateContent += productTemplateContentEnd;

			let productTemplate = '';
			productTemplate += productTemplateStart;
			productTemplate += productTemplateAdd;
			productTemplate += productTemplateContent;
			productTemplate += productTemplatePrices;
			productTemplate += productTemplateEnd;

			productsItems.insertAdjacentHTML(position, productTemplate);

		});

	}

	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll(".lock-padding");

	let unlock = true;

	const timeout = 800;

	if (popupLinks.length > 0) {
		for (let index = 0; index < popupLinks.length; index++) {
			const popupLink = popupLinks[index];
			popupLink.addEventListener("click", function (e) {
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const curentPopup = document.getElementById(popupName);
				popupOpen(curentPopup);
				e.preventDefault();
			});
		}
	}
	const popupCloseIcon = document.querySelectorAll('.close-popup');
	if (popupCloseIcon.length > 0) {
		for (let index = 0; index < popupCloseIcon.length; index++) {
			const el = popupCloseIcon[index];
			el.addEventListener('click', function (e) {
				popupClose(el.closest('.popup'));
				e.preventDefault();
			});
		}
	}

	function popupOpen(curentPopup) {
		if (curentPopup && unlock) {
			const popupActive = document.querySelector('.popup.open');
			if (popupActive) {
				popupClose(popupActive, false);
			} else {
				body_lock_add(0);
			}
			curentPopup.classList.add('open');
			curentPopup.addEventListener("click", function (e) {
				if (!e.target.closest('.popup__content')) {
					popupClose(e.target.closest('.popup'));
				}
			});
		}
	}

	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			popupActive.classList.remove('open');
			if (doUnlock) {
				if (!document.querySelector('.header__nav-hidden').classList.contains('_active')) {
					body_lock_remove(0)
				}
			}
		}
	}

	function body_lock_remove(delay) {
		let body = document.querySelector("body");
		if (unlock) {
			let lock_padding = document.querySelectorAll("._lp");
			setTimeout(() => {
				for (let index = 0; index < lock_padding.length; index++) {
					const el = lock_padding[index];
					el.style.paddingRight = '0px';
				}
				body.style.paddingRight = '0px';
				body.classList.remove("lock");
			}, delay);

			unlock = false;
			setTimeout(function () {
				unlock = true;
			}, delay);
		}
	}
	function body_lock_add(delay) {
		let body = document.querySelector("body");
		if (unlock) {
			let lock_padding = document.querySelectorAll("._lp");
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
			}
			body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
			body.classList.add("lock");

			unlock = false;
			setTimeout(function () {
				unlock = true;
			}, delay);
		}
	}

	document.addEventListener('keydown', function (e) {
		if (e.which === 27) {
			const popupActive = document.querySelector('.popup.open');
			popupClose(popupActive);
		}
	});

	const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
	const windowHeight = document.documentElement.clientHeight;


	let lazyImagesPositions = [];
	if (lazyImages.length > 0) {
		lazyImages.forEach(img => {
			if (img.dataset.src || img.dataset.srcset) {
				lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
				lazyScrollCheck();
			}
		});
	}

	window.addEventListener("scroll", lazyScroll);

	function lazyScroll() {
		if (document.querySelectorAll('img[data-src],source[data-srcset]').length > 0) {
			lazyScrollCheck();
		}
	}


	function lazyScrollCheck() {
		let imgIndex = lazyImagesPositions.findIndex(
			item => pageYOffset > item - (windowHeight + 500)
		);
		if (imgIndex >= 0) {
			if (lazyImages[imgIndex].dataset.src) {
				lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
				lazyImages[imgIndex].removeAttribute('data-src');
			} else if (lazyImages[imgIndex].dataset.srcset) {
				lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
				lazyImages[imgIndex].removeAttribute('data-srcset');
			}
			delete lazyImagesPositions[imgIndex];
		}
	}


})
