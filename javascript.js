
var what_is_shown = [];

function initJS() {
	$('.service-tile').each(function(index) {
		$(this).click(function() {
			$tile = $(this).parent();
			tile_id = $tile.attr("idx");
			//toggleDescTile(tile_id);
			showDescModal(tile_id);
		})
	});

	$('#modal button#modal-close').first().click(
		function() {
			$('#modal').hide();
		});
}

function toggleDescTile(tile_id) {
	var $serviceBox = getServiceBox(tile_id);
	$desc = $tile.find(".service-desc");
	if (what_is_shown[tile_id] == undefined || what_is_shown[tile_id] == false) {
		$desc.show();
		what_is_shown[tile_id] = true;
	} else {
		$desc.hide();
		what_is_shown[tile_id] = false;
	}
}

function showDescModal(tile_id) {
	var title = getServiceTitle(tile_id);
	var desc = getServiceDesc(tile_id);
	showModal(title, desc);
}

function getServiceDesc(tile_id) {
	var $serviceBox = getServiceBox(tile_id);
	var desc = $serviceBox.first().find(".service-desc").text();
	return desc;
}

function getServiceTitle(tile_id) {
	var $serviceBox = getServiceBox(tile_id);
	var title = $serviceBox.first().find(".services-title-container").text();
	return title;
}

function getServiceBox(tile_id) {
	var search_str = ".service-box[idx='" + tile_id + "']";
	return $(search_str);

}

function showModal(title, desc) {
	$('#modal #modal-heading').text(title);
	$('#modal #modal-text').text(desc);
	$('#modal').show();
}

function goto (id) {
	document.getElementById(id).scrollIntoView();
}

function initMap() {
        var uluru = {lat: 33.6071436, lng: 73.0126884};
        var map = new google.maps.Map(document.getElementById('contact-map'), {
          zoom: 15,
          center:uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

$('document').ready(function() {
	initJS();
});