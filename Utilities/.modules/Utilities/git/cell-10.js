var importer = require('../Core');
$$.async();
importer.import('git.ipynb[tip git tree]')    .then(gitTipOfTree => gitTipOfTree())    .then(r => $$.html(`<style>div.svg-wrapper svg {    max-width:none;}div.svg-output {    min-height:600px;}
div.svg-wrapper:first-of-type {
    position:static;
}
div.svg-wrapper {    opacity: .05;    position:absolute;}div.svg-wrapper:nth-last-of-type(3) {    opacity: .15;}div.svg-wrapper:nth-last-of-type(2) {    opacity: .3;}div.svg-wrapper:last-of-type {    opacity: 1;}</style><div class="svg-output"><div` + r.map((s, i) => ' style="left:' + ((r.length - i) * -20 + (i == r.length - 1        ? 200        : 0)        + (i == r.length - 2            ? 150            : 0)        + (i == r.length - 3            ? 100            : 0)) + 'px; top:' + (i * 10) + 'px;" class="svg-wrapper">' + s).join('</div><div') + '</div></div>'))    .catch(e => $$.sendError(e))