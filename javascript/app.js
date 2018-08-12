var app = {};

let navigationLinks = document.getElementsByTagName('nav')[0];
let button = document.getElementsByTagName('button')[0];

let ul = navigationLinks.children[0];


const toggleTests = document.getElementById('toggleTests');
const testLinks = document.querySelector('.testGround');

//ACTIVE LINKS

$(function () {
	$('nav ul li a').each(function () {
		$(this).removeClass('selected')
		if ($(this).prop('href') == window.location.href) {
			$(this).addClass('selected');
		}
	});
});

//WHERE TO DUMP ALL THE CODE

/*
$(function() {
	var $page = jQuery.url.attr("file");
	$('nav li a').each(function() {
		var $href = $(this).attr('href');
		if ( ($href == $page) ) {
			$(this).addClass('selected');
		} else {
			$(this).removeClass('selected')
		}
	})
})

//NAVIGATION

$(function() {
	//Keyboard shortcuts
	$("body").keyup(function(e) {
		if (e.keyCode == 39) {
			//Key right
			app.goToNext();
		} else if (e.keyCode == 37) {
			//Key left
			app.goToPrev();
		} 
	});
});

app.goToNext = function() {
	//Apply .selected class to next li item.
	$(".selected")
		.removeClass("selected")
		.parent().next().find("a").addClass("selected");
};

app.goToPrev = function() {
	//Apply .selected class to previous li item.
	$(".selected")
	.removeClass("selected")
	.parent().prev().find("a").addClass("selected");
};

app.showSelectedPage = function() {
	var index = $(".selected").parent().index()
}
*/