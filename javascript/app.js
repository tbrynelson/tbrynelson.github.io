const toggleTests = document.getElementById('toggleTests');
const testLinks = document.querySelector('.testGround');

toggleTests.addEventListener('click', () => {
	if (testLinks.style.display == 'none') {
		toggleTests.textContent = 'Hide.';
		testLinks.style.display = 'block';
	} else {
		toggleTests.textContent = "Show.";
		testLinks.style.display = 'none';
	}
});