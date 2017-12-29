const toggleInfo = document.getElementById('toggleInfo');
const infoDiv = document.querySelector('#info');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listUl = infoDiv.querySelector('ul');
const lis = listUl.children;

function attachListItemButtons(li) {
	let up = document.createElement('button');
	up.className = 'up';
	up.textContent = 'Up';
	li.appendChild(up);
	let down = document.createElement('button');
	down.className = 'down';
	down.textContent = 'Down';
	li.appendChild(down);
	let remove = document.createElement('button');
	remove.className = 'remove';
	remove.textContent = 'Remove';
	li.appendChild(remove);
}

/*infoDiv.addEventListener('mouseover', () => {
	listItems.textContent = listItems.textContent.toUpperCase();
});

infoDiv.addEventListener('mouseout', () => {
	listItems.textContent = listItems.textContent.toLowerCase();
});*/

for (let i = 0; i < lis.length; i += 1) {
	attachListItemButtons(lis[i]);
}

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
		if (event.target.className == 'down') {
			let li = event.target.parentNode;
			let nextLi = li.nextElementSibling;
			let ul = li.parentNode;
			if (nextLi) {
				ul.insertBefore(nextLi, li);
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
	attachListItemButtons(li);
	ul.appendChild(li);
	addItemInput.value = '';
});
