/**
  * Written by Brian Cullinan, exported using magic.
  * Copyright (c) 2019 by Brian Cullinan, All rights reserved.
  *
  * google cloud function sheet handler?
**/

var getSheet = require('./get-sheet-identifier-from-link.js');

exports.handler = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    return await getSheet(req.query['link'])
        .then(r => res.status(200).send(r))
        .catch(e => res.status(500).send(Object.getOwnPropertyNames(e).reduce((alt, key) => {
            alt[key] = e[key] + '';
            return alt;
        }, {})));
};
