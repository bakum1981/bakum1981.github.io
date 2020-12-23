$(function() {
	let brg_btn = document.querySelector('.hamburger');
	let menu = document.querySelector('.header__menu');
	let body = document.querySelector('body');	

	brg_btn.onclick = function() {
		brg_btn.classList.toggle('is-active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	}

	

	const cart = $('.cart-block');
	const tab = $('.news-block__tab');
	tab.click(function(e){		
		const currentTab = $(this).attr('data-name');
		$(this).addClass('active');
		tab.not(this).removeClass('active');
		if(currentTab === 'all'){
			cart.removeClass('hide');			
		}else{
			cart.each(function(){
				if($(this).attr('data-cat') !== currentTab){
					$(this).addClass('hide');
				}else {
					$(this).removeClass('hide');
				} 	
			});		
		}
			
	});
});	


