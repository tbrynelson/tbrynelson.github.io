const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.addClass('secure');
$pdfs.attr('download', true);
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
	//check if checkbox is checked
	//if zero checkboxes are checked
	if ($(':checked').length === 0) {
		//prevent download of document
		//alert the user
	event.preventDefault();
	alert('Please check the box to allow PDF downloads.');
}});

$('a').each(function() {
	const url = $(this).attr('href');
	$(this).parent().append(` (${url})`);
});