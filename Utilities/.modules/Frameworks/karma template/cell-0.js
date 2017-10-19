var execSync = require('child_process').execSync;
try {
    require.resolve('glob');
} catch (e) {
    execSync('npm install glob');
}
var fs = require('fs');
var glob = require('glob');
var path = require('path');

var cwd = 'C:\\Users\\brian.cullinan\\Documents\\portal\\src';

var spec = `
import {ComponentFixture} from '@angular/core/testing';
import {} from 'jasmine';
import {MockBackend} from '@angular/http/testing';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {By} from '@angular/platform-browser';
import {Core} from '../../../testing/core';
{import}

describe('{title}', function () {
    let fixture: ComponentFixture<{title}>;
    let router: Router;
    let location: Location;
    let xhr: MockBackend;
    let comp: {title};

    beforeEach(() => {
        fixture = Core.createAppWithShared([], [], [{title}]);
        comp = fixture.componentInstance;
        router = fixture.debugElement.injector.get(Router);
        xhr = fixture.debugElement.injector.get(MockBackend);
        location = fixture.debugElement.injector.get(Location);
    });

    it('should load {title}', (done) => {
        fixture.whenStable().then(() => {
            expect(comp).not.toBeNull();
            done();
        });
    });

});
`;

var files = glob.sync('**/*component.ts', {
    ignore: '**/*.spec.ts',
    cwd: cwd
});

var titles = files.map(f => {
    var name = f.split('.')[0].split('/').pop();
    var ucFirst = name.replace(/(^|\s|-)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
    return ucFirst.replace(/-/ig, '') + 'Component';
});

titles.forEach((t, i) => {
    try {
        var specPath = path.join(cwd, files[i].replace('.ts', '.spec.ts'));
        if (fs.existsSync(specPath)) {
            return;
        }
        var fileStr = files[i].split('/').pop().replace('.ts', '');
        var importStr = 'import {' + t + '} from \'./' + fileStr + '\';';
        fs.writeFileSync(specPath, spec
            .replace(/\{title\}/ig, t)
            .replace(/\{import\}/ig, importStr));
    } catch (e) {
    }
});


