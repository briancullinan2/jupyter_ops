var importer = require('../Core');
var collectFacebookProfiles = importer.import('collect facebook profiles')
/*

    https://www.facebook.com/dadsrawesome/videos/1165913990203850/
    https://www.facebook.com/galacticempireofficial/videos/800461353413445/
        */
$$.async();
collectFacebookProfiles()
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e))
