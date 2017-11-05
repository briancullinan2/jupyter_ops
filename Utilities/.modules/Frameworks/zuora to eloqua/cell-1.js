var request = require('request');
var fs = require('fs');
var { URL } = require('url');

var zuoraOauth = (credentials) => {
    var rest_api, rest_user, rest_pass;
}

var httpRequest = (options) => {
    return new Promise((resolve, reject) => {
        request(options, function (error, res, body) {
            if(error) {
                reject(error);
            }
            resolve(res);
        });
        
        if(typeof body !== 'undefined') {
            req.write(body);
        }
    });
}

var token, expires;
var eloquaOauth = (eloquaConfig) => {
    if(typeof eloquaConfig === 'undefined'
       || typeof eloquaConfig.rest_api_company === 'undefined'
       || typeof eloquaConfig.rest_api_user === 'undefined'
       || typeof eloquaConfig.rest_api_password === 'undefined'
       || typeof eloquaConfig.rest_client_id === 'undefined'
       || typeof eloquaConfig.rest_secret === 'undefined') {
        throw new Error('Please supply valid config eloqua configuration.');
    }
    var authBody = {
        "grant_type": "password",
        "scope": "full",
        "username": eloquaConfig.rest_api_company + '\\' + eloquaConfig.rest_api_user,
        "password": eloquaConfig.rest_api_password
    };
    return httpRequest({
        followAllRedirects: true,
        uri: eloquaConfig.token_uri,
        method: 'POST',
        json: authBody,
        headers: {
            'Authorization': "Basic " + new Buffer(eloquaConfig.rest_client_id + ":" + eloquaConfig.rest_secret).toString("base64")
        },
    })
        .then(res => {
            token = res.body.access_token;
            res.body['expires'] = expires = (new Date()).getTime() + parseFloat(res.body.expires_in) * 1000;
            return res.body;
        })
}

var zuoraExport = (query) => {
    
}

var csvToJson = (csv) => {
    
}

var mapDataToFields = () => {
    
}

var eloquaBulkImport = (json, eloquaToken, eloquaConfig) => {
    const createTemplate = {
        'name': 'Renewals Micro-service POC - Notify Import',
        'updateRule': 'always',
        'fields': {
            'EmailAddress': '{{Contact.Field(C_EmailAddress)}}',
            'RenewalsStatus': '{{Contact.Field(C_Renewals_Status1)}}'
        },
        'identifierFieldName': 'EmailAddress'
    }
    //if(!string.IsNullOrEmpty(instance))
    //        {
    //            fields.Add("Content", string.IsNullOrEmpty(execution)
    //                                      ? $"{{{{ContentInstance({instance})}}}}"
    //                                      : $"{{{{ContentInstance({instance}).Execution[{execution}]}}}}");
    //        }
    return httpRequest({
        followAllRedirects: true,
        uri: eloquaConfig.rest_api_url + '/bulk/2.0/contacts/imports',
        method: 'POST',
        json: createTemplate,
        headers: {
            'Authorization': "Bearer " + eloquaToken.access_token
        },
    })
}

module.exports = {
    eloquaBulkImport,
    mapDataToFields,
    csvToJson,
    zuoraExport,
    zuoraOauth,
    eloquaOauth
}
