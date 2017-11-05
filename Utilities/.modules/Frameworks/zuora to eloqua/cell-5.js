var excludedProducts = [
    'Act! Pro - New License',
    'Act! Pro - 30 Day Support',
    'Act! Pro - Upgrade License',
    'Act! Password Reset Charge',
    'Act! Premium Cloud - Trial',
    'Act! Pro V19 - Upgrade License',
]
var excludedSkus = [
    '00000006'
]
var currencies = [
    'USD',
    'AUD',
    'NZD',
]


/*
GET_MODIFIED_SUBSCRIPTIONS,
from.ToString("yyyy-MM-dd"),
to.ToString("yyyy-MM-dd"),
DateTime.Now.ToString("yyyy-MM-dd"),
string.Join("' AND ProductRatePlan.Name!='", renewalsServiceConfiguration.ProductExclusions),
string.Join("' AND Product.SKU!='", renewalsServiceConfiguration.SkuExclusions),
string.Join("' OR Account.Currency='", renewalsServiceConfiguration.CurrencyInclusions)
*/

module.exports = `SELECT
    Account.Id,
    Account.Name,
    Account.AccountNumber,
    Account.resellerofRecord__c,
    Account.renewalRep__c,
    Account.commisionedSalesRep__c,
    Account.CreatedDate,
    SoldToContact.WorkEmail,
    SoldToContact.Country,
    BillToContact.WorkEmail,
    RatePlanCharge.Id,
    RatePlanCharge.BillingPeriod,
    RatePlanCharge.Description,
    RatePlanCharge.Quantity,
    RatePlanCharge.Version,
    RatePlanCharge.CreatedDate,
    RatePlanCharge.EffectiveEndDate,
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
WHERE Subscription.Status!='Draft' AND Subscription.Status!='Expired'
    AND Subscription.TermEndDate &gt;='{0}' AND Subscription.TermEndDate &lt;='{1}'
    AND (Account.Currency='{5}')
    AND (Product.SKU!='{4}')
    AND (RatePlanCharge.EffectiveEndDate &gt;='{2}' OR RatePlanCharge.ChargeType='OneTime')
    AND (ProductRatePlan.Name!='{3}')
    AND RatePlanCharge.BillingPeriod!='Month'`
.replace('{3}', excludedRatePlans)
.replace('{4}', excludedProductSkus)
.replace('{5}', currencies)
