$(document).ready( function () {
	const url = "https://data.wa.gov/resource/dgis-xpmb.json";
	$('#disclosures').html("<h2>Click a button.</h2>");	

	function displayDisclosures(data) {
		let candHTML = '<ul>';
		$.each(data, function(i, filer) {
			candHTML += '<li>' + filer.filer_name;
			candHTML += '</br>' + filer.report_number;
			candHTML += '</br>' + filer.receipt_date + '</li>';
			candHTML += '</br>';
		});
		candHTML += '</ul>';
		$('#disclosures').html(candHTML);
	};

/*	function getPort() {
		let dataAPI = {
			"$limit": 10,
			"$$app_token": "zlKhVnPoU2jYArmMBQlgSSsqt",
			"$order": "receipt_date DESC",
			"jurisdiction": "PORT OF VANCOUVER",
		};
		$.getJSON(url, dataAPI, displayDisclosures);
	};
*/

	$('.disclose').click(function (evt) {
		let jurisdiction = $(this).text();
		let dataAPI = {
			"$limit": 10,
			"$$app_token": "zlKhVnPoU2jYArmMBQlgSSsqt",
			"$order": "receipt_date DESC",
			"jurisdiction": jurisdiction,
		};
		$.getJSON(url, dataAPI, displayDisclosures);
		console.log(jurisdiction)
	});

	$("#reset").click(function(evt) {
		evt.preventDefault();
		$('#disclosures').html("<h2>Click a button.</h2>");
	});

})