var moment = require('moment');
var _ = require('lodash');
var chrono = require('chrono-node');

function mapRatePlanToProduct(description) {
    if(description.indexOf('trial') > -1)
        return 'trial';
    else if (description.indexOf('cloud') > -1 && description.indexOf('trial') === -1)
        return 'actpremiumcloud';
    else if (description.indexOf('premium') > -1 && description.indexOf('cloud') === -1
             && description.indexOf('trial') === -1 && description.indexOf('support') === -1)
        return 'actpremium';
    else if (description.indexOf('pro') > -1  && description.indexOf('support') === -1)
        return 'actpro';
    else if (description.indexOf('support') > -1)
        return 'support';
    else if (description.indexOf('handheld') > -1)
        return 'handheld';
    else if (description.indexOf('aem') > -1)
        return 'aem';
}

function mapDataToFields(records) {
    var uniqueIds = _.groupBy(records, r => r['Account.Id']);
    return Object.keys(uniqueIds).map(k => {
        const record = {};
        uniqueIds[k].sort((a, b) =>
                          chrono.parseDate(b['Subscription.TermEndDate']).getTime()
                          - chrono.parseDate(a['Subscription.TermEndDate']).getTime());
        // contact information
        const contact = uniqueIds[k].filter(p => p['SoldToContact.WorkEmail'] || p['BillToContact.WorkEmail'])[0]
        if(typeof contact === 'undefined') {
            console.log(uniqueIds[k]);
            return;
        }
        record['EmailAddress'] = contact['SoldToContact.WorkEmail'] || contact['BillToContact.WorkEmail'];
        record['State'] = contact['SoldToContact.State'];
        record['Country'] = contact['SoldToContact.Country'];

        // primary product on subscription
        const actProduct = uniqueIds[k].filter(p => {
            const pname = mapRatePlanToProduct(p['RatePlanCharge.Description'].toLowerCase());
            return pname === 'actpremiumcloud' || pname === 'actpremium' || pname === 'actpro' || pname === 'trial'
        })[0];
        
        if(typeof actProduct !== 'undefined') {
            record['ActProduct'] = mapRatePlanToProduct(actProduct['RatePlanCharge.Description'].toLowerCase());
            record['Quantity'] = actProduct['RatePlanCharge.Quantity'];
        } else {
            record['ActProduct'] = 'Unknown';
            record['Quantity'] = 0;
        }
        
        // support
        const support = uniqueIds[k].filter(p => {
            return mapRatePlanToProduct(p['RatePlanCharge.Description'].toLowerCase()) === 'support'
        })[0];
        if(typeof support !== 'undefined') {
            record['Support'] = mapRatePlanToProduct(support['RatePlanCharge.Description'].toLowerCase());
            record['SupportQuantity'] = support['RatePlanCharge.Quantity'];
        } else {
            record['Support'] = 'Unknown';
            record['SupportQuantity'] = 0;
        }
        
        // subscription data
        const renewal = chrono.parseDate(uniqueIds[k][0]['Subscription.TermEndDate']);
        record['RenewalsStatus'] = uniqueIds[k][0]['Subscription.Status'];
        record['RenewalDate'] = moment(renewal).format('YYYY-MM-DD');
        
        // TODO: add card expiration
        const expiration = new Date();
        expiration.setDate(1);
        expiration.setMonth(parseInt(uniqueIds[k][0]['DefaultPaymentMethod.CreditCardExpirationMonth']) - 1);
        expiration.setYear(parseInt(uniqueIds[k][0]['DefaultPaymentMethod.CreditCardExpirationYear']));
        record['CardExpiration'] = moment(expiration).format('YYYY-MM-DD');
        record['Last4DigitsOfCard'] = ((/([0-9]+)/ig).exec(uniqueIds[k][0]['DefaultPaymentMethod.CreditCardMaskNumber']) || [])[1];
        
        // account data
        record['RepName'] = uniqueIds[k][0]['Account.renewalRep__c'];
        record['RORName'] = uniqueIds[k][0]['Account.resellerofRecord__c'];
        record['RORNumber'] = ((/([0-9]+)/ig).exec(uniqueIds[k][0]['Account.resellerofRecord__c']) || [])[1];
        record['AccountId'] = uniqueIds[k][0]['Account.Id'];

        return record;
    }).filter(r => typeof r !== 'undefined');
}
module.exports = mapDataToFields;
