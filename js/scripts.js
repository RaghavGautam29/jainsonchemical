;(function($) {

"use strict";

var $body = $('body');
// var $head = $('head');
// var $mainWrapper = $('#main-wrapper');

$(document).ready(function() {

  /* -------------------------------------------------------------------------
    MEDIA QUERY BREAKPOINT
  ------------------------------------------------------------------------- */

  // HEADER TOOLBAR LANGUAGE
  var $headerLanguageToggle = $('.language');

  $headerLanguageToggle.children('a').on('click', function (event) {
    event.preventDefault();
    $(this).parent('.language').toggleClass('active');
  });

  $headerLanguageToggle.on('clickoutside touchendoutside', function () {
    if ($headerLanguageToggle.hasClass('active')) { $headerLanguageToggle.removeClass('active'); }
  });


  // TESTIMONIALS SLIDER
  $(".testimonials-slider").owlCarousel({
    singleItem: true,
    pagination: true
  });

  // CLIENTS SLIDER LOGOS
  $(".clients-slider").owlCarousel({
    items : 5,
    navigation: true,
    navigationText: [
      "<div class='button prevSlide'><i class='fa fa-angle-left'></i></div>",
      "<div class='button nextSlide'><i class='fa fa-angle-right'></i></div>"
    ]
  });

  // TABS
  $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
    
  });

  // RESPONSIVE HEADER
  $('.toggleMenu').each(function() {

    var rightside = $('.right-side-inner');

    $(this).on('click', function() {
      $(rightside).slideToggle('200');
      $(rightside).toggleClass('active');
    });
  });


	// Set Background Image
  // ---------------------------------------------------------
  $('.has-bg-image').each(function () {
    var $this = $(this),

        image = $this.data('bg-image'),
        color = $this.data('bg-color'),
        opacity = $this.data('bg-opacity'),

        $content = $('<div/>', { 'class': 'content' }),
        $background = $('<div/>', { 'class': 'background' });

    if (opacity) {
      $this.children().wrapAll($content);
      $this.append($background);

      $this.css({
        'background-image': 'url(' + image + ')'
      });

      $background.css({
        'background-color': '#' + color,
        'opacity': opacity
      });
    } else {
      $this.css({
        'background-image': 'url(' + image + ')',
        'background-color': '#' + color
      });
    }
  });

  // RESET MEDIA QUERY
  $(window).resize(function(){
    if ($(window).width() > 991) {
      $('.right-side-inner').removeAttr( 'style' );
    }
  });

  $('.offer-content, .offer-features, .story-content, .story-features').matchHeight({});

  (function($) {
    $(function() {
      function initialize(){
        var map_canvas = document.getElementById("map");
        var myLatlng = new google.maps.LatLng(51.507351, -0.127758);
        var map_options = {
            center: myLatlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false
        };

        var map = new google.maps.Map(map_canvas, map_options);
        map.set("styles", [
        {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#193341"
            }
        ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2c5a71"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#29768a"
                },
                {
                    "lightness": -37
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#406d80"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#406d80"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#3e606f"
                },
                {
                    "weight": 2
                },
                {
                    "gamma": 0.84
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "weight": 0.6
                },
                {
                    "color": "#1a3541"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2c5a71"
                }
            ]
        }
        ]);

        // Set content inside info window if marker clicked
        var infowindow = new google.maps.InfoWindow({
            content: '<div class="map-info"><div class="address"><strong>Address: </strong>207 Waze Ave, San Francisco, TX</div><div class="mail"><strong>Email: </strong>mail@email.com</div><div class="phone"><strong>Phone: </strong>+543 654 123</div></div>'
        });

        // Init Google Maps
        var myIcon = new google.maps.MarkerImage("img/marker.png", null, null, null, new google.maps.Size(59,59));
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: myIcon
        });
        google.maps.event.addListener(marker, "click", function() {
            infowindow.open(map,marker);
        });
    }

    if( $("#map").length ) google.maps.event.addDomListener(window, "load", initialize);
    });

      $('#map').css({'height': $('.contact-form').innerHeight()});
  })(jQuery);

});



// Touch
// ---------------------------------------------------------
var dragging = false;

$body.on('touchmove', function() {
	dragging = true;
});

$body.on('touchstart', function() {
	dragging = false;
});



}(jQuery));
