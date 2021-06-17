$(function() {	

   	// show or hide modal windows
   	function toggleModal(modalSelector, triggerSelector, closeSelector){
   		let body = document.querySelector('body');	
   		const modal = document.querySelector(modalSelector)
   		const trigger = document.querySelector(triggerSelector)
   		const close = document.querySelectorAll(closeSelector)
   		let menu = document.querySelector('.header__nav');
   		const windows = document.querySelectorAll('.modal') //all modal windows
   	
   	// show modal on click
   		trigger.addEventListener('click',function(e) {
   			for(let i=0; i<windows.length; i++){
   				if(windows[i].getAttribute('data-modal') === 'true' && !windows[i].classList.contains(modal)){
   					windows[i].classList.remove('modal-active')
   					windows[i].setAttribute('data-modal', 'false')
   				}
   			} //hide popap opend before
   			if(e.target){
   				e.preventDefault()
   			}			
   			modal.classList.add('modal-active')
   			body.classList.add('lock')  //remove scroll on body
   			modal.setAttribute('data-modal', 'true')

   		})

   		 // hide modal when  click on the escape
   		document.addEventListener('keydown', function(event) {
    		 const keycode= event.keyCode;
    		 if(keycode === 27){
    		 	modal.classList.remove('modal-active')
    		 	body.classList.remove('lock') //add scroll on body 
    		 	modal.setAttribute('data-modal', false) 
    		 	if(menu.classList.contains('active')){
    		 		body.classList.add('lock')
    		 	}
    		 }
   		});

   		// hide modal when  click on close button
   		for(let i=0; i<close.length; i++){
			let clickItem = close[i]
			clickItem.addEventListener('click', function() {
				modal.classList.remove('modal-active')
				body.classList.remove('lock') //add scroll on body
				modal.setAttribute('data-modal', false)
				if(menu.classList.contains('active')){
					body.classList.add('lock')
				}
			})
   		}
   		
   		// hide modal when click on space around modal
   		modal.addEventListener('click', function(e) {
   			if(e.target === modal){
   				modal.classList.remove('modal-active')
   				body.classList.remove('lock') //add scroll on body
   				modal.setAttribute('data-modal', false)
   				if(menu.classList.contains('active')){
   					body.classList.add('lock')
   				}
   			}
   		})

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
		button.addEventListener('click', function(e){
			e.preventDefault()
		})

	}

	clearSettings()
	// open or close mobile menu
	let brg_btn = document.querySelector('.hamburger'); 	
	brg_btn.onclick = function() {
		let menu = document.querySelector('.header__nav');
		let blockRight = document.querySelector('.header__block--right')
		let body = document.querySelector('body');	
		brg_btn.classList.toggle('is-active')
		menu.classList.toggle('active')
		body.classList.toggle('lock')  //remove scroll on body
		blockRight.classList.toggle('hide')  
	}

	// hide adaptiv menu on click element of menu	
	function hideMenu(){
		let menuEl = document.querySelectorAll('.header__menu-el-nav'); 
		let blockRight = document.querySelector('.header__block--right')
		let body = document.querySelector('body');
		let menu = document.querySelector('.header__nav');
			console.log(menuEl)
			for(let i=0; i<menuEl.length; i++){
				let clickItem = menuEl[i]
				clickItem.onclick = function() {
					console.log(clickItem)
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
	search_btn.addEventListener('click', function(e){
		let search_input = document.querySelector('.search__input')
		e.preventDefault()
		search_input.classList.toggle('active')
		// add animation
		if(search_input.classList.contains('active')){
			search_input.style.animation = "incrementedWidth 0.7s ease"
			search_input.style.width = "150px"
		}else{
			search_input.style.animation = "decrementedWidth 0.7s ease"
			search_input.style.width = "0px"
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
  			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  		},
  		image: {
  			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  			titleSrc: function(item) {
  				// return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
  			}
  		}
  	});

  // sliders

  	// get count of sliders and current slider and show it on the screen
   function showSlidersInfo(){
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
		},
		{
          breakpoint: 470,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
		},

     ]
  })

  	// send form to server

  	function forms()  {
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
  		async function postData  (url, data) {
  			// add message 'loading' in formData 
  			for(let i=0; i<form.length; i++){
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

  		function clearInputs ()  {
  			for(let i=0; i<inputs.length; i++){
  				inputs[i].value = ''
  			}
  			 formPreview.innerHTML = ''
  		}
		// append formData in form 
  		for(let i=0; i<form.length; i++){
  			const item = form[i]
  			item.addEventListener('submit', function(e) {
  				e.preventDefault()
  				let statusMessage = document.createElement('div')
  				statusMessage.classList.add('status')
  				item.appendChild(statusMessage)
  				const formData = new FormData(item)
  				formData.append('image', formImage.files[0])
  				postData('server.php', formData)
  					.then(function(res) {
  						console.log(res)
  						for(let i=0; i<form.length; i++){
  							const current = form[i]
  							current.classList.remove('sending')
  						}
  						if(item === registrationForm){
  							statusMessage.textContent = message.registrationSuccess
  						}else{
  							statusMessage.textContent = message.entranceSuccess
  					 	}
  					})
  					.catch(function() {statusMessage.textContent = message.failure})
  					.finally(function() {
  						clearInputs();
  						setTimeout(function() {
  							statusMessage.remove()
  						}, 5000)	
  					})
  			})
  		}
  	}

  	forms()
  	

  	formImage.addEventListener('change', function(){
  		uploadFile(formImage.files[0])
  	})
  	function uploadFile(file) {
  		// get input file
  		const formImage = document.getElementById('formImage')
  		// get div for Preview image
  		const formPreview = document.getElementById('filePreview')
  		// check file type
  		if(!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
  			alert('Разрешены только изображения.')
  			formImage.value = ''
  			return
  		}
  		// check size of file (< 2mb)
  		if(file.size > 2 * 1024 * 1024 ){
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
  		let pass2=document.getElementById("passwordReg").value;
  		let pass1=document.getElementById("repeat-password").value;
  		if(pass1!=pass2)
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
	    for(let i=0; i<inputs.length; i++){
	    	const item = inputs[i]
	    	item.addEventListener('input', function(){
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
	function goToSection(){
		// get all elements with attibute data-goto
		const menuLinks = document.querySelectorAll('.header__link[data-goto]')
		if(menuLinks.length > 0){ //add click on each element
			for(let i=0; i<menuLinks.length; i++){
				const clickItem = menuLinks[i]
				clickItem.addEventListener('click', onMenuClick)
			}
			function onMenuClick(e) { //do smooth transition to section
				const menuLink = e.target
				if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
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
	function toggleSelect(){
		const clickItem = document.querySelector('.entrance-form__select-window') 
		const list = document.querySelector('.entrance-form__select-list')
		const selectElements = document.querySelectorAll('.entrance-form__list-item')
		const arrow = document.querySelector('.fa')
		clickItem.onclick = function(){
			list.classList.toggle('active') //open select menu
			arrow.classList.toggle('active') //rotate select arrow
		}

		for(let i=0; i<selectElements.length; i++){ //check all elements of select list
			const trigger = selectElements[i] //get click element
			trigger.addEventListener('click', function(e){
				let inputValue = document.getElementById('selectInput')
				const currentValue = e.target.textContent
				inputValue.value = currentValue
				list.classList.remove('active')
				arrow.classList.remove('active')
			})
		}
		
	}
	toggleSelect()

});	 
              
              new WOW().init(); //add wow.js library


