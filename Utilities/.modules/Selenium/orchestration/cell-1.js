
const rows = 6;
const columns = 6;
var screen;

var getScreenSize = () => {
    return client
        .windowHandle()
        .then(r => client.windowHandleMaximize(r.value))
        .catch(e => {})
        .windowHandleSize()
        .then(r => (screen = r.value))
        .catch(e => console.log(e))
}

var resizeWindow = (i = 0) => {
    i = i + (typeof OFFSET !== 'undefined' ? OFFSET : 0);
    var hwnd;
    return client
        .windowHandle()
        .then(r => client.window((hwnd = r.value)))
        .then(() => getScreenSize())
        .then(screen => {
            const newPosition = {
                x: Math.floor(i % columns)
                    * Math.floor(screen.width / columns),
                y: Math.floor(i / columns % rows)
                    * Math.floor(screen.height / rows)
            };
            console.log(newPosition);
            return client.windowHandlePosition(hwnd, newPosition)
        })
        .then(() => client.windowHandleSize(hwnd, {
            width: Math.floor(screen.width / columns),
            height: Math.floor(screen.height / rows)
        }))
        .catch(e => console.log(e))
}
if(typeof client.resizeWindow === 'undefined') {
    client.addCommand('resizeWindow', resizeWindow);
}
module.exports = resizeWindow;
