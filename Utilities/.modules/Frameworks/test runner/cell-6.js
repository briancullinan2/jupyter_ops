var importer = require('../Core');
var framework = require('wdio-mocha-framework');
var wdio = require('wdio-sync');
var Module = require('module').Module;
var Mocha = require('mocha');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var INTERFACES = {
    bdd: ['before', 'beforeEach', 'it', 'after', 'afterEach'],
    tdd: ['suiteSetup', 'setup', 'test', 'suiteTeardown', 'teardown'],
    qunit: ['before', 'beforeEach', 'test', 'after', 'afterEach']
}

var mocha;
if(typeof mocha === 'undefined') {
    mocha = new Mocha({
        ui: 'bdd',
        compilers: ['js:babel-register'],
        timeout: 100000,
        reporter: 'list'
    });
}

// put them in the order to include them in the context
var f = PROFILE_PATH + '/Documents/Selenium/ecommerce/test/specs/trial.js';
var ctx = {};
var {testCells, createWebdriverClient} = importer.import([
    'test cells continuously',
    'webdriver client'
], {mocha});

//    const adapter = new framework.MochaAdapter(cid, config, specs, capabilities)
//    return adapter.run()

ctx.browser = ctx.client = createWebdriverClient();
Object.assign(ctx.client.options, {mochaOpts: mocha.options})

var r = {
    id: f,
    runInNewContext: (ctx) => {
        return importer.runInNewContext(fs.readFileSync(f).toString(), Object.assign(ctx, {
            __filename: f
        }))
    }
}

mocha.suite.emit('pre-require', ctx, r.id, mocha);
Object.assign(ctx, Mocha);
mocha.suite.emit('require',
                 Object.assign(ctx, r.runInNewContext(ctx)),
                 r.id, mocha);
mocha.suite.emit('post-require', ctx, r.id, mocha);  

wdio.wrapCommands(
    ctx.client,
    ctx.client.options.beforeCommand,
    ctx.client.options.afterCommand)

mocha.suite.on('pre-require', (context, file, m) => {
    Object.assign(mocha.options, {
        context, file, mocha: m, options: mocha.options
    })

    INTERFACES[mocha.options.ui].forEach((fnName) => {
        let testCommand = INTERFACES[mocha.options.ui][2]

        wdio.runInFiberContext(
            [testCommand, testCommand + '.only'],
            ctx.client.options.beforeHook,
            ctx.client.options.afterHook,
            fnName,
            ctx
        )
    })
})

$$.async();
new Promise(resolve => mocha.run(function (failures) {
    resetTests(mocha.suite);
    resolve(failures);
}))
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e))
