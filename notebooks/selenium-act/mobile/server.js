const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const previewResponse = {
    "contractedMrr": "156.66",
    "totalContractedValue": "1,879.95",
    "amount": "999.95",
    "amountWithoutTax": "999.95",
    "taxAmount": "0.00",
    "invoiceTargetDate": "2017-05-25",
    "invoiceItems": [{
        "serviceStartDate": "2017-05-25",
        "serviceEndDate": "2018-05-24",
        "chargeAmount": "79.95",
        "chargeDescription": "Handheld Contact - Annual subscription charges",
        "chargeName": "HHC User Charges",
        "productName": "Handheld Contact",
        "productRatePlanChargeId": "2c92c0f85a6b139f015a9528e8fa7ac1",
        "quantity": "1",
        "unitOfMeasure": "User"
    }, {
        "serviceStartDate": "2017-05-25",
        "serviceEndDate": "2018-05-24",
        "chargeAmount": "840.00",
        "chargeDescription": "Act! Premium Cloud - Annual Subscription",
        "chargeName": "Act! Premium Cloud Per User Charge",
        "productName": "Act! Premium Cloud",
        "productRatePlanChargeId": "2c92c0f94d2ccde2014d4a04bd066ed4",
        "quantity": "2",
        "unitOfMeasure": "User"
    }, {
        "serviceStartDate": "2017-05-25",
        "serviceEndDate": "2017-06-24",
        "chargeAmount": "15.00",
        "chargeDescription": "AEM Call List",
        "chargeName": "AEM Call List",
        "productName": "Act! eMarketing",
        "productRatePlanChargeId": "2c92c0f855c3b8d70155c74f1c8d76b0",
        "quantity": "1",
        "unitOfMeasure": "User"
    }, {
        "serviceStartDate": "2017-05-25",
        "serviceEndDate": "2017-06-24",
        "chargeAmount": "35.00",
        "chargeDescription": "AEM Contact Block",
        "chargeName": "AEM Contact Block",
        "productName": "Act! eMarketing",
        "productRatePlanChargeId": "2c92c0f855c3b81b0155c750dfa351df",
        "quantity": "7",
        "unitOfMeasure": "Each"
    }, {
        "serviceStartDate": "2017-05-25",
        "serviceEndDate": "2017-06-24",
        "chargeAmount": "30.00",
        "chargeDescription": "AEM User Charges",
        "chargeName": "AEM User Charges",
        "productName": "Act! eMarketing",
        "productRatePlanChargeId": "2c92c0f855c3b81b0155c74cd6aa47d5",
        "quantity": "1",
        "unitOfMeasure": "User"
    }],
    "processId": null,
    "reasons": null
};

app.use(bodyParser.json());
app.use(function (req, res, next) {
    if (req.header('Origin')) {
        res.header("Access-Control-Allow-Origin", req.header('Origin'));
        res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.htm');
});
app.post('/api/trial/create', function (req, res) {
    res.send('');
});
app.post('/api/purchase/preview', function (req, res) {
    res.send(previewResponse);
});
app.post('/identity/registration/register', function (req, res) {
    res.send('');
});
app.post('/identity/connect/token', function (req, res) {
    res.send({access_token: 'some token'});
});
try {
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
} catch (e) {
    console.log(e);
}

