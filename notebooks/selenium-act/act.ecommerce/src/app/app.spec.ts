import {AuthService} from './auth/auth.service';
const assert = require('assert');
import {AppComponent} from './app.component';
import {} from 'jasmine';
import {ComponentFixture, inject} from '@angular/core/testing';
import {AuthServiceStub} from '../testing/auth-stubs';
import {ActivatedRoute, Router} from '@angular/router';
import {By} from '@angular/platform-browser';
import {Location} from '@angular/common';
import {Core} from '../testing/core';
import {LayoutComponent} from './layout/layout.component';

describe('AppComponent with some layout components', function () {
    let fixture: ComponentFixture<AppComponent>;
    let comp: AppComponent;
    let router: Router;
    let route: ActivatedRoute;
    let location: Location;
    let authService: AuthServiceStub;

    // mock everything the SharedModule includes because we need to override AuthService
    beforeEach(() => {
        fixture = Core.createAppWithShared();
        comp = fixture.componentInstance;
        router = fixture.debugElement.injector.get(Router);
        location = fixture.debugElement.injector.get(Location);
        route = fixture.debugElement.injector.get(ActivatedRoute);
        authService = fixture.debugElement.injector.get(AuthService);
    });

    it('should create AppComponent', () => {
        expect(comp).not.toBeNull('should be created successfully');
    });

    it('should navigate and load the buy page', (done) => {
        fixture.whenStable().then(() => {
            router.navigate(['/buy']).then(() => {
                expect(location.path()).toBe('/buy');
                done();
            });
        });
    });

    it('has logout link when user is logged in', (done) => {
        authService.loggedIn.next(true);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            authService.loggedIn.subscribe((l) => {
                const links = fixture.debugElement.query(By.css('bc-account-links'));
                expect(links).not.toBeNull('should should show logout button');
                expect(links.nativeElement.innerText).toContain('.LOGOUT');
                done();
            });
        });
    });

    it('has login link when user is not logged in', (done) => {
        authService.loggedIn.next(false);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            authService.loggedIn.subscribe((l) => {
                const links = fixture.debugElement.query(By.css('bc-account-links'));
                expect(links).not.toBeNull('should should show login button');
                expect(links.nativeElement.innerText).toContain('.LOGIN');
                done();
            });
        });
    });

});




