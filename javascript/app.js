const toggleTests = document.getElementById('toggleTests');
const testLinks = document.querySelector('.testGround');

toggleTests.addEventListener('click', () => {
	if (testLinks.style.display == 'block') {
		toggleTests.textContent = 'Show.';
		$(testLinks).slideUp(100);
	} else {
		toggleTests.textContent = 'Hide.';
		$(testLinks).slideDown(100);
	}
});