$('.phone-mask').mask('+7(999) 999-99-99', {
	placeholder: '+7(___) ___-__-__'
});

// open Modal Windows
$('#openFocCall').fancybox();
$('.foc-partner-open').fancybox();
$('.foc-info-open').fancybox();

//Nav-menu
$( window ).resize(function() {
  mobileMenu();
});

function mobileMenu() {
	if ($(window).width() < 1200) {	
		$('.header-menu').slicknav();	
	}
}

// googleMap
function initMap() {
	// var uluru = {lat: -25.363, lng: 131.044};
	var markerImage = '../images/map-marker-lemonTree-small-1.png';
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		center: {
			lat: 51.140859,
			lng: 21.276507
		},
		scrollwheel: true,
		disableDefaultUI: true
	});

	var markerRus = new google.maps.Marker({		
		map: map,
		icon: markerImage,
		position: {
			lat: 53.203063,
			lng: 50.156436
		},
		animation: google.maps.Animation.DROP
	});

	var markerPol = new google.maps.Marker({		
		map: map,
		icon: markerImage,
		position: {
			lat: 51.140859,
			lng: 21.276507
		},
		animation: google.maps.Animation.DROP
	});

	var markerSpain = new google.maps.Marker({		
		map: map,		
		icon: markerImage,
		position: {
			lat: 39.977751,
			lng: -2.938409
		},
		animation: google.maps.Animation.DROP
	});

	var styledMapType = new google.maps.StyledMapType([{
		"elementType": "geometry", 
		"stylers": [ { 
			"color": "#333333" 
		} ] 
	}, { 
		"elementType": "labels.icon", 
		"stylers": [ { 
			"visibility": "off" 
		} ] 
	}, { 
		"elementType": "labels.text.fill", 
		"stylers": [ { 
			"color": "#757575" 
		} ] 
	}, { 
		"elementType": "labels.text.stroke", 
		"stylers": [ { 
			"color": "#212121" 
		} ] 
	}, { 
		"featureType": "administrative", 
		"elementType": "geometry", 
		"stylers": [ { 
			"color": "#2b2b2b" 
		} ] 
	}, { 
		"featureType": "administrative.country", 
		"elementType": "labels.text.fill", 
		"stylers": [ { 
			"color": "#9e9e9e" 
		} ] 
	}, { 
		"featureType": "administrative.land_parcel", 
		"stylers": [ { 
			"visibility": "off" 
		} ] 
	}, { 
		"featureType": "administrative.locality", 
		"elementType": "labels.text.fill", 
		"stylers": [ { 
			"color": "#bdbdbd" 
		} ] 
	}, { 
		"featureType": "poi", 
		"elementType": "labels.text.fill", 
		"stylers": [ { 
			"color": "#757575" 
		} ] 
	}, { 
		"featureType": "poi.park", 
		"elementType": "geometry", 
		"stylers": [ { 
			"color": "#181818" 
		} ] 
	}, { 
		"featureType": "poi.park", 
		"elementType": "labels.text.fill", 
		"stylers": [ { 
			"color": "#616161" 
		} ] 
	}, { 
		"featureType": "poi.park", 
		"elementType": "labels.text.stroke", 
		"stylers": [ { 
			"color": "#1b1b1b" 
		} ] 
	}, { 
		"featureType": "road", 
		"elementType": "geometry.fill", 
		"stylers": [ { 
			"color": "#2c2c2c" 
	} ] }, { 
		"featureType": "road", 
		"elementType": "labels.text.fill", 
		"stylers": [ { 
			"color": "#8a8a8a" 
		} ] 
	}, { 
		"featureType": "road.arterial", 
		"elementType": "geometry", 
		"stylers": [ { 
			"color": "#373737" 
		} ] 
	}, { 
		"featureType": "road.highway", 
		"elementType": "geometry", 
		"stylers": [ { 
			"color": "#3c3c3c" 
		} ] 
	}, { 
		"featureType": "road.highway.controlled_access", 
		"elementType": "geometry", 
		"stylers": [ { 
			"color": "#4e4e4e" 
		} ] 
	}, { 
		"featureType": "road.local", 
		"elementType": "labels.text.fill", 
		"stylers": [ { 
			"color": "#616161" 
		} ] 
	}, { 
		"featureType": "transit", 
		"elementType": "labels.text.fill", 
		"stylers": [ { 
			"color": "#757575" 
		} ] 
	}, { "featureType": "water", 
		"elementType": "geometry", 
		"stylers": [ { 
			"color": "#2b2b2b" 
		} ] 
	}, { 
		"featureType": "water", 
		"elementType": "labels.text.fill", 
		"stylers": [ { 
			"color": "#3d3d3d" 
		} ]
	}], {
		name: 'Styled Map' 
	});

	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}

$(document).ready(function() {
  initMap();
  mobileMenu();
});

//
$('.secondPage-content .paragraph .paragraph-item').on('click', function() {
	// dataID=$(this).find('.paragraph-item').attr('data-id');
	// dataValue=$(this).find('.paragraph-desc').attr('data-value'); 
	var ths = $(this);
	if (ths.hasClass('active')) {
	} else {
		$('.paragraph-desc').removeClass('active');
		if (ths.hasClass('first-item')) {
			$('.paragraph-desc.first-desc').addClass('active');
		} else if (ths.hasClass('second-item')) {
			$('.paragraph-desc.second-desc').addClass('active');
		} else if (ths.hasClass('third-item')) {
			$('.paragraph-desc.third-desc').addClass('active');
		} else if (ths.hasClass('fouth-item')) {
			$('.paragraph-desc.fouth-desc').addClass('active');
		} else if (ths.hasClass('fifth-item')) {
			$('.paragraph-desc.fifth-desc').addClass('active');
		}
		$('.secondPage-content .paragraph .paragraph-item').removeClass('active');
		ths.addClass('active');
	}
});

$('.fourthPage-content .paragraph .paragraph-item').on('click', function() {
	// dataID=$(this).find('.paragraph-item').attr('data-id');
	// dataValue=$(this).find('.paragraph-desc').attr('data-value'); 
	var ths = $(this);
	if (ths.hasClass('active')) {
	} else {
		$('.paragraph-desc').removeClass('active');
		if (ths.hasClass('first-item')) {
			$('.paragraph-desc.first-desc').addClass('active');
		} else if (ths.hasClass('second-item')) {
			$('.paragraph-desc.second-desc').addClass('active');
		} else if (ths.hasClass('third-item')) {
			$('.paragraph-desc.third-desc').addClass('active');
		} else if (ths.hasClass('fouth-item')) {
			$('.paragraph-desc.fouth-desc').addClass('active');
		} else if (ths.hasClass('fifth-item')) {
			$('.paragraph-desc.fifth-desc').addClass('active');
		}
		$('.fourthPage-content .paragraph .paragraph-item').removeClass('active');
		ths.addClass('active');
	}
});