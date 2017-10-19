var execSync = require('child_process').execSync;
try {
    require.resolve('@google/maps');
} catch (e) {
    execSync('npm install @google/maps');
}

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDfyeLLaEHRuSmefGcfqC2fanhyRajAido' // places
});


var placesNearby = (name, nearby) => {
    return new Promise((resolve, reject) => {
        var service = googleMapsClient.placesNearby({
            name: name,
            location: nearby,
            rankby: 'distance'
        }, (err, response, status) => {
            if (err === null) {
                resolve(response.json.results);
            } else {
                reject(err);
            }
        });
    })
        .catch(e => console.log(e));
};
module.exports = placesNearby;
placesNearby;

