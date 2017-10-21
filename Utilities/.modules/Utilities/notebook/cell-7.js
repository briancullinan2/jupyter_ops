var fs = require('fs');
var glob = require('glob');

var PROFILE_PATH = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var PROJECT_PATH = PROFILE_PATH + '/Documents/jupytangular2/Utilities/.modules';
var project = PROFILE_PATH + '/Documents/jupytangular2';

var cells = glob.sync('**/cell-*', {cwd: PROJECT_PATH});
for (const c of cells) {
    const cell = path.basename(c);
    const notebook = path.basename(path.dirname(c));
    const parent = path.basename(path.dirname(path.dirname(c)));
    if (parent === 'jupytangular2') {
        continue;
    }
    const nb = JSON.parse(fs.readFileSync(path.join(project, parent, notebook + '.ipynb')));
    let counter = 0;
    for (const i in nb.cells) {
        if (!nb.cells.hasOwnProperty(i)) {
            continue;
        }
        if (nb.cells[i].cell_type === 'code') {
            if (cell === 'cell-' + counter + '.js') {
                nb.cells[i].source = fs.readFileSync(path.join(PROJECT_PATH, c)).toString().split('\n');
            }
            counter++;
        }
    }
    fs.writeFileSync(path.join(project, parent, notebook + '.ipynb'), JSON.stringify(nb, null, 2));
}

