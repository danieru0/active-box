(function() {
	const btn = document.getElementById('nav-hamburger'),
		  list = document.getElementById('nav-list');
	
	btn.addEventListener('click', function() {
		if (list.classList.contains('active')) {
			list.classList.remove('active');
		} else {
			list.classList.add('active');
		}
	});
})();