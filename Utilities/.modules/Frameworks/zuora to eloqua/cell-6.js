var moment = require('moment');
var chrono = require('chrono-node');
var excludedRatePlans = [
    'Act! Pro - New License',
    'Act! Pro - 30 Day Support',
    'Act! Pro - Upgrade License',
    'Act! Password Reset Charge',
    'Act! Premium Cloud - Trial',
    'Act! Pro V19 - Upgrade License',
    'Act! Pro V20 - Upgrade License',
]
var excludedProductSkus = [
    '00000006'
]
var currencies = [
    'USD',
    'AUD',
    'NZD',
]

var query = `SELECT
    Account.Id,
    Account.Name,
    Account.AccountNumber,
    Account.resellerofRecord__c,
    Account.renewalRep__c,
    Account.commisionedSalesRep__c,
    Account.CreatedDate,
    SoldToContact.WorkEmail,
    SoldToContact.Country,
    SoldToContact.State,
    BillToContact.WorkEmail,
    RatePlanCharge.Id,
    RatePlanCharge.BillingPeriod,
    RatePlanCharge.Description,
    RatePlanCharge.Quantity,
    RatePlanCharge.Version,
    RatePlanCharge.CreatedDate,
    RatePlanCharge.EffectiveEndDate,
    DefaultPaymentMethod.CreditCardExpirationMonth,
    DefaultPaymentMethod.CreditCardExpirationYear,
    DefaultPaymentMethod.CreditCardMaskNumber,
    ProductRatePlan.planType__c,
    ProductRatePlan.planSubType__c,
    Product.productType__c,
    Subscription.Name,
    Subscription.Status,
    Subscription.Reseller__c,
    Subscription.SubscriptionEndDate,
    Subscription.SubscriptionStartDate,
    Subscription.TermStartDate,
    Subscription.TermEndDate,
    Subscription.AutoRenew
FROM RatePlanCharge
WHERE Subscription.Status!='Draft' AND Subscription.Status!='Cancelled'
    AND Subscription.TermEndDate &gt;='{0}' AND Subscription.TermEndDate &lt;='{1}'
    AND (RatePlanCharge.EffectiveEndDate &gt;='{2}' OR RatePlanCharge.ChargeType='OneTime')
    AND (Account.Currency='${currencies.join("' OR Account.Currency='")}')
    AND (Product.SKU!='${excludedProductSkus.join("' AND Product.SKU!='")}')
    AND (ProductRatePlan.Name!='${excludedRatePlans.join("' AND ProductRatePlan.Name!='")}')
    AND RatePlanCharge.BillingPeriod!='Month'
    AND NOT (SoldToContact.WorkEmail LIKE 'qaaw%@gmail.com')
    AND NOT (BillToContact.WorkEmail LIKE 'qaaw%@gmail.com')
    AND NOT (Account.Name LIKE 'do not use')
`;

function getQuery(start, end) {
    // TODO: add updated option for pulling based on subscription term or based on modified fields
    // TODO: add a query here to just look up one subscription record by it's ID?
    return {
        Query: query.replace('{0}', moment(chrono.parseDate(start)).format('YYYY-MM-DD'))
                    .replace('{1}', moment(chrono.parseDate(end)).format('YYYY-MM-DD'))
                    .replace('{2}', moment(new Date()).format('YYYY-MM-DD')),
        Format: 'csv',
        Zip: false
    };
}
module.exports = getQuery;
