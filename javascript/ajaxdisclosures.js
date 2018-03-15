$(document).ready( function () {
	const url = "https://data.wa.gov/resource/dgis-xpmb.json";
	const dataAPI = {
			"$limit": 3,
			"$$app_token": "zlKhVnPoU2jYArmMBQlgSSsqt",
			"$order": "receipt_date DESC",
			"jurisdiction": "PORT OF VANCOUVER",
	};

	const financeDiv = $('.finances');

	function discloseDown(data) {
		let candHTML = '<ul>';
		$.each(data, function(i, filer) {
			candHTML += '<li>' + filer.filer_name + ' on ' + filer.receipt_date;
			candHTML += '</br>' + '<a href="' + filer.url + '">Link.</a></li>';
			candHTML += '</br>';
		});
		candHTML += '</ul>';
		financeDiv.html(candHTML);
	};


	function classSwitch(elmt) {
		$(elmt).siblings('li').removeClass('selected');
		$(elmt).toggleClass('selected');
	};

	$('.jurisdictions > ul > li').on('click', function() {
		let selectedImage = $('img', this)
		classSwitch(this);
		let jorisdiction = $(selectedImage).data('jurisdiction');
		dataAPI['jurisdiction'] = jorisdiction;
		if (!$(this).hasClass('selected')) {
			financeDiv.html('<p>Click a picture to view disclosures.</p>');
		} else {
			dataAPI['jurisdiction'] = jorisdiction;
			$.getJSON(url, dataAPI, discloseDown);
		}
	});

})