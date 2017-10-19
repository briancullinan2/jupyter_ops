var fs = require('fs');
var path = require('path');
var replace = require('gulp-replace');
var gulp = require('gulp');

// add automock to project for callback services
var client, renderer, server, core;

var applyUniversal = (project) => {
    // gulp.task('theme',
    //    gulp.src('./some/dir/**/*.js', {cwd: 'path/to/project'})
    //        .src('./specific-file.ts')) // already within cwd in chain?

    // TODO: copy auth, resolve dependencies using file system script, generate code below

    // replace package.json
    gulp.task(
        'project relatives',
        gulp.series(projectRelatives(project)))
    // in *.js Can't resolve 'socket.io-client/package'
    // in *.ts Cannot find name 'JwtHelper' -> trace back to import statements?


    gulp.task('server module', function () {
        return gulp.src(['**/server/app/app.server.module.js'], {cwd: project})
        // add mock socket server to server/render-server or app.server.module
            .pipe(replace('import { AppComponent } from \'./app.component\'', `
import { AppComponent } from './app.component';
import { AuthService } from '../../client/app/auth/auth.service';
import { LogService } from '../../imports/log.service';
import { AuthManager } from '../../client/app/auth/auth.manager';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { MailgunValidatorService } from '../../client/app/auth/mailgun-validate.service';
`))
            // TODO: pipe server.ts to add log provider for log service
            .pipe(replace(
                /\)\],\s*AppModule\s*,providers\s*:\s*\[/ig,
                `)],
        AppModule
    ],
    providers: [
        {
            provide: AuthService,
            useValue: require('./sockify-server').sockifyRequire(AuthService, 'AuthService')
        },
        {
            provide: PlatformLocation,
            useValue: require('./sockify-server').sockifyRequire(PlatformLocation, 'PlatformLocation')
        },
        {
            provide: LogService,
            useValue: require('./sockify-server').sockifyRequire(LogService, 'LogService')
        },
        {
            provide: AuthGuard,
            useValue: require('./sockify-server').sockifyRequire(AuthGuard, 'AuthGuard')
        },
        AuthManager, JwtHelper, MailgunValidatorService,

    `))
            .pipe(gulp.dest(project))
    });

    // add socket-client provider for auth module to app.browser.module
    gulp.task('browser module', function () {
        return gulp.src(['**/client/app/app.browser.module.ts'], {cwd: project})
            .pipe(replace('import { AppComponent } from \'./app.component\'', `
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { PlatformLocation } from '@angular/common';
import { LogService } from '../../imports/log.service';
import { AuthManager } from './auth/auth.manager';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import { MailgunValidatorService } from './auth/mailgun-validate.service';
`))
            .pipe(replace(
                /\)\],\s*AppModule/ig,
                `)],
        AppModule,
    ],
    providers: [ AuthManager, JwtHelper, MailgunValidatorService,
        {
            provide: AuthService,
            useValue: require('./sockify-client').sockifyClient(AuthService, 'AuthService'),
        },
        {
            provide: PlatformLocation,
            useValue: require('./sockify-client').sockifyClient(PlatformLocation, 'PlatformLocation'),
        },
`))
            .pipe(gulp.dest(project))
    });

    // replace routes with lazy modules from other projects
    gulp.task('app router', function () {
        return gulp.src(['**/client/app/app.routes.ts'], {cwd: project})
            .pipe(replace(
                /children: \[/ig,
                `children: [
            {
                path: 'auth',
                loadChildren: './auth/auth.module#AuthModule'
            },
`))
            .pipe(gulp.dest(project))
    });

    // TODO: try new versions of packages to act like greenkeeper.io

    // gulp apply everything
    gulp.task(
        'apply universal',
        gulp.series(
            'server module',
            'browser module'
    'app router'
))
    ;

    return tasksToPromise(['apply universal'], []);
};
applyUniversal;

