/**
 * Created by samanthamusselman on 8/10/16.
 */

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.980, lng: 109.743},
        zoom: 8,
        styles: [
            {
                featureType: 'all',
                stylers: [
                    {saturation: -45}
                ]
            }
        ]
    });
}

function initMapTwo() {
    map = new google.maps.Map(document.getElementById('mapTwo'), {
        center: {lat: 51.507, lng: -0.1278},
        zoom: 10,
        styles: [
            {
                featureType: 'all',
                stylers: [
                    {saturation: -45}
                ]
            }
        ]
    });
}
