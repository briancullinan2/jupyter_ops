var execSync = require('child_process').execSync;
try {
    require.resolve('@google/maps');
} catch (e) {
    execSync('npm install @google/maps');
}

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDNoiOWuoAHvugP856YpmthZUKK5zA3BgQ' // geocoding
});


$$.async();

googleMapsClient.geocode({
    address: 'Kazimierz World Wine Bar near 33.5050330, -111.9262180'
}, function (err, response) {
    if (!err) {
        $$.sendResult(response.json());
    } else {
        $$.sendError(err);
    }
});


