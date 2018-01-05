const toggleTests = document.getElementById('toggleTests');
const testLinks = document.querySelector('.testGround');

toggleTests.addEventListener('click', () => {
	if (testLinks.style.display == 'block') {
		toggleTests.textContent = 'Show.';
		testLinks.style.display = 'none';
	} else {
		toggleTests.textContent = 'Hide.';
		testLinks.style.display = 'block';
	}
});