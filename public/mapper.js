let map = null;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 22.6445538, lng: 88.4388578},
        zoom: 8
    });
}

$(function () {

    let keyRequest = $.get('/mapkey');


    keyRequest.then(function (key) {
        console.log(`key = ${key}`);
        $('body').append(`<script src="https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap"></script>`)
    });

});