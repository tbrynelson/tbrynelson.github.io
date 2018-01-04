const toggleTests = document.getElementById('toggleTests');
const testDiv = document.querySelector('#testGround');

toggleTests.addEventListener('click', () => {
	if (testDiv.style.display == 'none') {
		toggleTests.textContent = 'Hide.';
		testDiv.style.display = 'block';
	} else {
		toggleTests.textContent = "Show tests.";
		testDiv.style.display = 'none';
	}
});