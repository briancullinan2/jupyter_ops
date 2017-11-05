// initialize

if (typeof imported !== 'object' || imported === null) {
    var imported = {};
}

imported['import notebook.ipynb'] = {
    'import notebook.ipynb[2]': streamJson,
    'streamJson': streamJson,
    'import notebook.ipynb[3]': getCells,
    'getCells': getCells,
    'import notebook.ipynb[4]': runAllPromises,
    'runAllPromises': runAllPromises,
    'import notebook.ipynb[7]': importNotebook,
    'import': importNotebook,
    'import notebook.ipynb[8]': imported,
    'imported': imported,
    'import notebook.ipynb[9]': interpret,
    'interpret': interpret,
    'import notebook.ipynb[11]': runInNewContext,
    'runInNewContext': runInNewContext
};

module.exports = imported['import notebook.ipynb'];

// $$.done() for our dumb parser

