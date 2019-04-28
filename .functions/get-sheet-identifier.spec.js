/**
  * Written by Brian Cullinan, exported using magic.
  * Copyright (c) 2019 by Brian Cullinan, All rights reserved.
  *
  * test get sheet identifier?
  * 
  * 
**/

var getSheet = require('./get-sheet-identifier-from-link.js');

describe('get sheet identifier', () => {

    it('should process the sheet id', () => {
        return getSheet('https://docs.google.com/spreadsheets/d/113mVIumItArQ_oXpfDRXP-2Kw2ms4t48oPJ68_p5P8k/edit#gid=0')
            .then(s => {
                console.log(s);
                assert(s.length > 0, 'sheet domain should be returned')
            })
    })
    
})
