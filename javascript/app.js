const toggleInfo = document.getElementById('toggleInfo');
const infoDiv = document.querySelector('#info');
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

toggleInfo.addEventListener('click', () => {
	infoDiv.style.display = 'none';
});

button.addEventListener('click', () => {
	p.innerHTML = input.value + ':';
})

p.title = "List description";