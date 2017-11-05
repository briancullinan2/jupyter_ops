var importer = require('../Core');

var openUrl = (url) => {
    var handles;
    return client
        .windowHandles()
        .then(h => handles = h.value)
        .execute((url, width, height) => {
            window.open(url, '', 'width=1350,height=1024');
        }, url)
        .windowHandles()
        .then(h => h.value.filter(hwnd => handles.indexOf(hwnd) === -1)[0])
        .catch(e => console.log(e))
    /*
    // TODO: use this openSPA()
    var id = Math.random().toString(36).substring(7);
    return client
        .execute((url, id, width, height) => {
            var a = document.createElement('a');
            a.setAttribute('onclick', 'window.open("' + url + '", "", "width=' + width + ',height=' + height + '"); return false;');
            a.setAttribute('id', id);
            a.href = url;
            a.style.position = 'absolute';
            a.style.zIndex = 4294967295;
            a.style.top = 0;
            a.style.left = 0;
            a.style.bottom = 0;
            a.style.right = 0;
            document.body.appendChild(a);
            setTimeout(() => a.remove(), 200);
        }, url, id, Math.floor(screen.width / columns), Math.floor(screen.height / rows))
        .click('a[id="' + id + '"]')
        */
}

var createNewWindows = (urls) => {
    var hwnd;
    return client
        .windowHandle()
        .then(r => hwnd = r.value)
        .windowHandles()
        .then(r => {
            // -1 first window is already used by sliced url
            const count = urls.length - (r.value.length - 1);
            const promises = [];
            for(var i = 0; i < count; i++) {
                promises.push((i => resolve => {
                    console.log(urls[i]);
                    return openUrl(urls[i])
                        .window(hwnd)
                        .then(h => resolve(h))
                        .catch(e => { console.log(e); resolve() })
                }).apply(this, [i]));
            }
            return importer.runAllPromises(promises);
        })
        .windowHandles()
        // position all windows after opening
        .then(r => {
            const promises = [];
            for(var i = 0; i < r.value.length; i++) {
                promises.push((i => resolve => {
                    return client
                        .window(r.value[i])
                        .resizeWindow(i)
                        .then(() => resolve())
                        .catch(e => {console.log(e); resolve()})
                }).apply(this, [i]));
            }
            return importer.runAllPromises(promises);
        })
        .catch(e => console.log(e))
}

var resizeWindow;
var tileWindows = (urls) => {
    return client
        .resizeWindow(0)
        .url(typeof urls === 'string' ? urls : urls[0])
        .then(h => typeof urls === 'string' ? [] : createNewWindows(urls.slice(1)))
        .windowHandles()
        .catch(e => console.log(e))
}
module.exports = tileWindows;

