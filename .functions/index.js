/**
  * Written by Brian Cullinan, exported using magic.
  * Copyright (c) 2019 by Brian Cullinan, All rights reserved.
  *
  * google cloud function sheet handler?
**/

var getSheet = require('./get-sheet-identifier-from-link.js');

exports.handler = async (req, res) => {
  return await getSheet(req.query['link']);
};
