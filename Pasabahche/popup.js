(function() {
	let body = document.querySelector('body');

	let closestAttr = function(item, attr) {
	let node = item;

	while(node) {
		let attrValue = node.getAttribute(attr);
		if(attrValue) {
			return attrValue;
		}

		node = node.parentElement;		
	}

	return null;

};


let closesItemByClass = function(item, className) {
	let node = item;

	while(node) {
		if(node.classList.contains(className)) {
			return node;
		}		
	}

		node = node.parentElement;		
	

	return null;
};

let showPopup = function(target) {
	target.classList.add('is-active');
};

let toggleScroll = function() {
	$('body').toggleClass('lock');
};

let closesPopup = function(target) {
	target.classList.remove('is-active');	
};

body.addEventListener('click', function (e) {
	let target = e.target;		
	let popupClass = closestAttr(target, 'data-popup');
	
	if(popupClass === null) {
		return;
	}
	e.preventDefault();
	let popup = document.querySelector('.' + popupClass);

	if(popup) {
		showPopup(popup);
		toggleScroll();
	}		
});

body.addEventListener('click', function (e) {
	let popup = document.querySelector('.popup.is-active');
	let target = e.target;
	if(target.classList.contains('close')) {
		closesPopup(popup);
		toggleScroll();
	}
});	


	body.addEventListener('keydown', function(e){
		if(e.keyCode !== 27) {
			return;
	}

	
	let popup = document.querySelector('.popup.is-active');

	if(popup) {
		closesPopup(popup);
		toggleScroll();
	}


	})
})();

