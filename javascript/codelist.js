let upDate = new Date(document.lastModified);
let date_stamp = "<p>Last modified: " + upDate.toDateString() + "</p>"

toggleTests.addEventListener('click', () => {
	if (testLinks.style.display == 'block') {
		toggleTests.textContent = 'Show.';
		$(testLinks).slideUp(100);
	} else {
		toggleTests.textContent = 'Hide.';
		$(testLinks).slideDown(100);
	}
});

if ($('#lastUpdated').length > 0) {
	$('#lastUpdated').append(date_stamp);
}
