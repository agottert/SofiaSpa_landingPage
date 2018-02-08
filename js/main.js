$('.navbar-collapse .navbar-nav > li').on("mouseenter", function() {
  if ($(this).hasClass('dropdown')) {
    if (!$(this).hasClass('open')) {
      $(this).find('a.dropdown-toggle').dropdown('toggle');
    }
  } else {
    $('.navbar-collapse li.open a.dropdown-toggle').dropdown('toggle');
  }
});

$('footer .scrollup').on("click", function(e){
  e.preventDefault();
  window.scrollTo(0, 0);
})

var map;
var latlng = {
  lat: -34.582671, lng: -58.476171
}
function initMap() {
  map = new google.maps.Map(document.getElementById('map-container'), {
    center: latlng,
    zoom: 16,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  });
}
