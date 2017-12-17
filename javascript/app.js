const toggleInfo = document.getElementById('toggleInfo');
const infoDiv = document.querySelector('#info');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('input.addItemButton');

toggleInfo.addEventListener('click', () => {
if (infoDiv.style.display == 'none') {
	toggleInfo.textContent = 'Hide info';
	infoDiv.style.display = 'block';
} else {
	toggleInfo.textContent = 'Show info';
	infoDiv.style.display = 'none';
}
});

addItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
	ul.appendChild(li);
	addItemInput.value = '';
})
