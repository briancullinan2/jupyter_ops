var importer = require('../Core');

var closeAllTabs = (keep) => {
    return client
        .getTabIds()
        .then(h => {
            var promises = [];
            for(var i = 0; i < h.length; i++) {
                if(h[i] === keep) {
                    continue;
                }
                promises.push((i => resolve => client
                              .switchTab(h[i])
                              .close()
                              .then(() => resolve())
                              .catch(e => resolve()))
                              .apply(this, [i]));
            }
            return importer.runAllPromises(promises);
        })
        .catch(e => console.log(e))
}

var closeAllWindows = (keep) => {
    return client
        .windowHandles()
        .then(h => {
            var promises = [];
            for(var i = 0; i < h.value.length; i++) {
                if(h.value[i] === keep) {
                    continue;
                }
                promises.push((i => resolve => client
                              .window(h.value[i])
                              .close()
                              .then(() => resolve())
                              .catch(e => resolve()))
                              .apply(this, [i]));
            }
            return importer.runAllPromises(promises);
        })
        .window(keep)
        .catch(e => console.log(e))
}

var onlyOneWindow = () => {
    return client
        .windowHandle()
        .then(r => client.window(r.value))
        .newWindow('https://google.com')
        .windowHandle()
        .then(r => closeAllWindows(r.value))
        .getCurrentTabId()
        .then(r => closeAllTabs(r))
        .resizeWindow(0)
        .catch(e => console.log(e))
    // TODO: close all tabs
}
module.exports = onlyOneWindow;

