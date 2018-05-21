// src ="https://maps.google.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU"
var y = document.getElementById("demo2");
function getLocation3() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition3, showError3);
    } else { 
        y.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition3(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
    var mapholder = document.getElementById('mapholder2')
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    var myOptions1 = {
    center:latlon,zoom:17,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }
    
    var map = new google.maps.Map(document.getElementById("mapholder2"), myOptions1);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

function showError3(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

