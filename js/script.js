function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function initMap() {
  // Specify the coordinates where you want the map to be centered
  var myLatLng = { lat: -34.397, lng: 150.644 };

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 8, // Adjust the zoom level as needed
  });

  // Optionally, you can add markers or other features to the map here.
}
