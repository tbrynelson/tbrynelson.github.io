$(document).ready(function () {

	$('form').submit(function (evt) {
		evt.preventDefault();
		var photoTag = $('#search').val();
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var flickrOptions = {
			tags: photoTag,
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = '<ul>';
			$.each(data.items, function (i, photo) {
				photoHTML += '<li class="grid-25 tablet-grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		};
		$.getJSON(flickerAPI, flickrOptions, displayPhotos);
	});

	$('button').click(function () {
		$("button").removeClass("selected");
		$(this).addClass("selected");
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";		
		var animal = $(this).text();
		var flickrOptions = {
			tags: animal,
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = '<ul>';
			$.each(data.items, function (i, photo) {
				photoHTML += '<li class="grid-25 tablet-grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			});
			photoHTML += '</ul>';
			$('#photos').html(photoHTML);
		}
		$.getJSON(flickerAPI, flickrOptions, displayPhotos);
	});

}); // end ready