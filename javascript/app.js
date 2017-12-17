const toggleInfo = document.getElementById('toggleInfo');
const infoDiv = document.querySelector('#info');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

toggleInfo.addEventListener('click', () => {
if (infoDiv.style.display == 'none') {
	toggleInfo.textContent = 'Hide info';
	infoDiv.style.display = 'block';
} else {
	toggleInfo.textContent = 'Show info';
	infoDiv.style.display = 'none';
}
});
