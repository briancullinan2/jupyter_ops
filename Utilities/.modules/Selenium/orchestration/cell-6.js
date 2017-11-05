var importer = require('../Core');

var query = 'list of search engines';

$$.async();
//importer.import('child process')
    //.then(execCmd => Promise.all([
    //    execCmd('node -e "require(\'/Users/briancullinan/jupytangular2/Core\').import(\'run todays calendar events\').then(runner => runner()).then(e => process.exit(e)).catch(e=>{console.log(e); process.exit(e) });"'),
    //    execCmd('node -e "require(\'/Users/briancullinan/jupytangular2/Core\').import(\'run todays calendar events\').then(runner => runner()).then(e => process.exit(e)).catch(e=>{console.log(e); process.exit(e) });"')
    //]))
// get multiple sets of 9 working for single page scraping in parallel
importer.import('selenium cell')
    .then(runSeleniumCell => runSeleniumCell('tile chrome windows'))
    .then(tileWindows => tileWindows([
        'https://www.google.com/search?q=' + query,
        'https://www.bing.com/search?q=' + query,
        'https://search.yahoo.com/search?p=' + query,
        'https://www.ask.com/web?q=' + query,
        'https://search.aol.com/aol/search?q=' + query,
        'https://www.baidu.com/s?wd=' + query,
        'https://www.wolframalpha.com/input/?i=' + query,
        'https://duckduckgo.com/?q=' + query,
        'https://archive.org/search.php?query=' + query,
    ]))
    .then(r => $$.sendResult(r))
    .catch(e => $$.sendError(e))

