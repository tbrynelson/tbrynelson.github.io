//Problem: I want to be able to click a button to populate a div with campaign finance reporting.
//Solution: Use AJAX requests to retrieve the information, then place them into the page with the DOM.

const discloseElement = $("#disclosures");
discloseElement.innerHTML = "";

$('button').click(function (evt) {
	evt.preventDefault();
	let url = "https://data.wa.gov/resource/dgis-xpmb.json";
	let dataAPI = {
		"$limit": 10,
		"$$app_token": "zlKhVnPoU2jYArmMBQlgSSsqt",
		"$order": "receipt_date DESC",
		"jurisdiction": "PORT OF VANCOUVER",
	};
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
	}
	$.getJSON(url, dataAPI, displayDisclosures);
});