var lat_long = {lat: 33.5000787, lng: -111.9270344};
$$.async();
placesNearby('Kazimierz World Wine Bar', lat_long)
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e));

