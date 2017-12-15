var _ = require('lodash');
var importer = require('../Core');
var d3PieChart = importer.import('d3 pie chart');
var {
    zuoraBulkExport,
    zuoraBulkExportStatus,
    zuoraBulkExportFile,
    csvToJson
} = importer.import('zuora export');
var getQuery = importer.import('zuora query');
var xlsx = require('xlsx');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE || '';

var october;
function getOctober() {
    var zuoraConfig = JSON.parse(fs.readFileSync(PROFILE_PATH + '/.credentials/zuoraRest_production.json').toString().trim());
    return zuoraBulkExport(getQuery('first of November', 'first of December'), zuoraConfig)
        .then(exportId => zuoraBulkExportStatus(exportId, zuoraConfig))
        .then(fileId => zuoraBulkExportFile(fileId, zuoraConfig))
        .then(r => csvToJson(r))
        .then(r => (october = r))
}

function getCharts(records) {
    var workbook = xlsx.readFile(PROFILE_PATH + '/Documents/asm/Marketing_File_Nov_.xlsx');
    var worksheet = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    const charts = [];

    var solds = worksheet.map(r => (r['Sold To Email'] || '').toLowerCase()),
        bills = worksheet.map(r => (r['Bill To Email'] || '').toLowerCase());

    const diff = records.filter(c => solds.indexOf((c['BillToContact.WorkEmail'] || '').toLowerCase()) === -1
                          && solds.indexOf((c['SoldToContact.WorkEmail'] || '').toLowerCase()) === -1
                          && bills.indexOf((c['BillToContact.WorkEmail'] || '').toLowerCase()) === -1
                          && bills.indexOf((c['SoldToContact.WorkEmail'] || '').toLowerCase()) === -1);

    //console.log(diff.slice(10, 13))
    console.log(diff.length);
    console.log(records.length)

    charts.push(d3PieChart([
        {
            label: 'matching',
            value: records.length - diff.length
        },
        {
            label: 'not matching',
            value: diff.length
        }
    ]));

    var trial = records.filter(c => c['RatePlanCharge.Description'].toLowerCase().indexOf('trial') > -1)
    var apc = records.filter(c => c['RatePlanCharge.Description'].toLowerCase().indexOf('cloud') > -1 && trial.indexOf(c) === -1)
    var premium = records.filter(c => c['RatePlanCharge.Description'].toLowerCase().indexOf('premium') > -1
                          && apc.indexOf(c) === -1 
                          && trial.indexOf(c) === -1
                          && c['RatePlanCharge.Description'].toLowerCase().indexOf('support') === -1)
    var pro = records.filter(c => c['RatePlanCharge.Description'].toLowerCase().indexOf('pro') > -1
                       && c['RatePlanCharge.Description'].toLowerCase().indexOf('support') === -1)
    var support = records.filter(c => c['RatePlanCharge.Description'].toLowerCase().indexOf('support') > -1)
    var handheld = records.filter(c => c['RatePlanCharge.Description'].toLowerCase().indexOf('handheld') > -1)
    var aem = records.filter(c => c['RatePlanCharge.Description'].toLowerCase().indexOf('aem') > -1)
    var unknown = records.filter(c => apc.indexOf(c) === -1 && premium.indexOf(c) === -1
                           && pro.indexOf(c) === -1 && support.indexOf(c) === -1 && handheld.indexOf(c) === -1
                           && aem.indexOf(c) === -1)
    charts.push(d3PieChart([
        {
            label: 'Trial',
            value: apc.length
        },
        {
            label: 'APC',
            value: apc.length
        },
        {
            label: 'Act Premium',
            value: premium.length
        },
        {
            label: 'Act Pro',
            value: pro.length
        },
        {
            label: 'Support',
            value: support.length
        },
        {
            label: 'Handheld Contact',
            value: handheld.length
        },
        {
            label: 'AEM',
            value: aem.length
        },
        {
            label: 'Unknown',
            value: unknown.length
        }
    ]))

    var annualSupport = records.filter(c => c['RatePlanCharge.Description'].toLowerCase().indexOf('annual') > -1
                                       && c['RatePlanCharge.Description'].toLowerCase().indexOf('support') > -1)
    var monthlySupport = records.filter(c => c['RatePlanCharge.Description'].toLowerCase().indexOf('support') > -1
                                        && annualSupport.indexOf(c) === -1)
    var noSupport = records.filter(c => monthlySupport.indexOf(c) === -1 && annualSupport.indexOf(c) === -1)
    charts.push(d3PieChart([
        {
            label: 'Monthly support',
            value: monthlySupport.length
        },
        {
            label: 'Annual support',
            value: annualSupport.length
        },
        {
            label: 'No support',
            value: diff.length
        }
    ]))

    var grouped = _.groupBy(records, c => c['Account.Id']);
    var singleRecords = Object.keys(grouped).filter(k => grouped[k].length === 1);
    var multiRecords = Object.keys(grouped).filter(k => grouped[k].length > 1);

    //console.log(singleRecords.slice(0, 3).map(k => grouped[k]))
    //console.log(multiRecords.slice(0, 3).map(k => grouped[k]))

    charts.push(d3PieChart([
        {
            label: 'One record',
            value: singleRecords.length
        },
        {
            label: 'Multiple records',
            value: multiRecords.length
        }
    ]))

    // number of seats/quantity (primary/support)
    var quantities = _.groupBy(records, c => c['RatePlanCharge.Quantity']);
    charts.push(d3PieChart(Object.keys(quantities).map(k => ({
        label: k,
        value: quantities[k].length
    }))))

    // Cancellations/Statuses
    var statuses = _.groupBy(records, c => c['Subscription.Status']);
    charts.push(d3PieChart(Object.keys(statuses).map(k => ({
        label: k,
        value: statuses[k].length
    }))))

    // 2-year subscriptions
    var terms = _.groupBy(records, c => c['RatePlanCharge.BillingPeriod']);
    charts.push(d3PieChart(Object.keys(terms).map(k => ({
        label: k,
        value: terms[k].length
    }))))

    //TODO: Rors, "Align to term" instead of align to charge

    return charts.join('');
}

if(typeof $$ !== 'undefined') {    
    $$.async();
    (typeof october === 'undefined' ? getOctober() : Promise.resolve(october))
        .then(records => $$.svg(getCharts(records)))
        .catch(e => $$.sendError(e))
}
