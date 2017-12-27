const toggleInfo = document.getElementById('toggleInfo');
const infoDiv = document.querySelector('#info');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('input.addItemButton');
const listUl = listDiv.querySelector('ul');

/*infoDiv.addEventListener('mouseover', () => {
	listItems.textContent = listItems.textContent.toUpperCase();
});

infoDiv.addEventListener('mouseout', () => {
	listItems.textContent = listItems.textContent.toLowerCase();
});*/

listUl.addEventListener('click', (event) => {
	if (event.target.tagName == 'BUTTON') {
		if (event.target.className == 'remove') {
		let li = event.target.parentNode;
		let ul = li.parentNode;
		ul.removeChild(li);
		}
		if (event.target.className == 'up') {
		let li = event.target.parentNode;
		let prevLi = li.previousElementSibling;
		let ul = li.parentNode;
		if (prevLi) {
			ul.insertBefore(li, prevLi);
			}
		}
	}
})

document.addEventListener('click', (event) => {
	console.log(event.target);
});

toggleInfo.addEventListener('click', () => {
if (infoDiv.style.display == 'none') {
	toggleInfo.textContent = 'Hide info';
	infoDiv.style.display = 'block';
} else {
	toggleInfo.textContent = 'Show info';
	infoDiv.style.display = 'none';
}
});

descriptionButton.addEventListener('click', () => {
	descriptionP.innerHTML = descriptionInput.value + ':';
	descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
	let ul = document.getElementsByTagName('ul')[0];
	let li = document.createElement('li');
	li.textContent = addItemInput.value;
	ul.appendChild(li);
	addItemInput.value = '';
});
