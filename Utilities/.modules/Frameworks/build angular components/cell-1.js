var execSync = require('child_process').execSync;
try {
    require.resolve('webpack');
} catch (e) {
    execSync('npm install webpack');
}

// source https://github.com/christianalfoni/webpack-bin/issues/106
var webpackAngularProject = (project) => {
    // set up project path
    var previous = process.cwd();
    process.chdir(project);
    module.paths.unshift(project + '/node_modules');

    var webpack = require('webpack');
    var webpackConfig = require(path.join(project, 'webpack.config.js'));
    var gulp = require(path.join(project, 'config', 'gulp-helpers.js'));
    var settings = gulp.loadSettings(require(path.join(project, 'config', 'build-config.json')));
    var config = webpackConfig({
        env: 'prod',
        platform: 'server'
    }, gulp.root, settings);
    var compiler = webpack(config);

    // TODO: do we need this since it is already mocked in angular-cli
    //mockTypescriptFs = eval("'use strict';" + r[0].code);
    //mockTypescriptFs(project, data);
    //compiler.inputFileSystem = memfs;
    //compiler.outputFileSystem = memfs;
    //compiler.resolvers.normal.fileSystem = memfs;
    //compiler.resolvers.context.fileSystem = memfs;

    return new Promise((resolve, reject) => {
        compiler.run(function (err, stats) {
            process.chdir(previous);
            if (err) return reject(err);
            resolve(stats.compilation.assets['server.js'].source());
        });
    });
};
webpackAngularProject;
