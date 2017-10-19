$$.async();
var path = require('path');
if (process.platform === 'win32') {
    var notebook = 'How to install Docker on Windows.ipynb';
} else if (process.platform === 'darwin') {
    var notebook = 'How to install Docker on Mac.ipynb';
} else {
    $$.done('docker not installed');
}