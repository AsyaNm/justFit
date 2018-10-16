var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 53.1851228,
			lng: 50.0893038
		},
		zoom: 14,
		scrollwheel: false,
		disableDefaultUI: true,
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
		}
	});
}