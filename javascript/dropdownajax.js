$(document).ready( function () {
	const url = "https://data.wa.gov/resource/dgis-xpmb.json";
	const dataAPI = {
			"$limit": 2,
			"$$app_token": "zlKhVnPoU2jYArmMBQlgSSsqt",
			"$order": "receipt_date DESC",
			"jurisdiction": "PORT OF VANCOUVER",
	};

	const financeDiv = $('.finance');
	let clickBool = true;

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

	$('.elections').on('click', function() {
		$(this).siblings('img').removeClass('selected');
		$(this).toggleClass("selected");
		let jorisdiction = $(this).data('jurisdiction');
		dataAPI['jurisdiction'] = jorisdiction;
		if (!$(this).hasClass('selected')) {
			$('.finance').html('');
		} else {
			dataAPI['jurisdiction'] = jorisdiction;
			$.getJSON(url, dataAPI, discloseDown);
		}
	});

	$('.elections').mouseover(function() {
		$(this).addClass("butts");
	});

	$('.elections').mouseout(function() {
		$(this).removeClass("butts");
	});

});

/*



		dataAPI['jurisdiction'] = jorisdiction;
		$.getJSON(url, dataAPI, discloseDown);
	});

	if($('.elections').data('clicked', true)) {
		$('.finance').html('<p>What is going on?!</p>');
	}

toggleTests.addEventListener('click', () => {
	if (testLinks.style.display == 'block') {
		toggleTests.textContent = 'Show.';
		$(testLinks).slideUp(100);
	} else {
		toggleTests.textContent = 'Hide.';
		$(testLinks).slideDown(100);
	}
}
*/