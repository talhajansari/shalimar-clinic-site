
function initJS() {
	$('.service-tile').each(function(index) {
		$(this).click(function() {
			alert('Cliked');
		})
	})
}


$('document').ready(function() {
	initJS();
});

function goto (url) {
	window.location = url;
}