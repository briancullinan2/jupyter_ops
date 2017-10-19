function getTuesdays(month, year) {
    var d = new Date(year, month, 1),
        tuesdays = [];

    d.setDate(d.getDate() + (9 - d.getDay()) % 7)
    while (d.getMonth() === month) {
        tuesdays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }

    return tuesdays;
}

var month = (new Date()).getMonth();
var results = [];
for (var m = month; month <= 12; month++) {
    results = results.concat(getTuesdays(month, 2017).filter((d) => d.getDate() > 25));
}
console.log(results.map(d => d.getDate() + '/' + (d.getMonth() + 1)).join('\r\n'))