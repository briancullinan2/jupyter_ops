import {ComponentFixture, TestBed} from '@angular/core/testing';
const assert = require('assert');
import {} from 'jasmine';
import {ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {AppComponent} from '../../app.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AuthModule} from '../auth.module';
import {AccountRegisterComponent} from './register';
import {Core} from '../../../testing/core';

describe('RegisterComponent', function () {
    let fixture: ComponentFixture<AppComponent>;
    let router: Router;
    let location: Location;
    let xhr: MockBackend;
    let comp: AppComponent;
    let trial: AccountRegisterComponent;
    let trialFixture: ComponentFixture<AccountRegisterComponent>;

    // mock everything the SharedModule includes because we need to override AuthService
    beforeEach(() => {
        fixture = Core.createAppWithShared([AuthModule], [{
            path: 'account/register',
            component: AccountRegisterComponent
        }]);
        comp = fixture.componentInstance;
        comp.ngOnInit();
        router = fixture.debugElement.injector.get(Router);
        xhr = fixture.debugElement.injector.get(MockBackend);
        location = fixture.debugElement.injector.get(Location);
        trialFixture = TestBed.createComponent(AccountRegisterComponent);
        trial = trialFixture.componentInstance;
    });

    it('should create component', (done) => {
        expect(comp).not.toBeNull('should be created successfully');

        fixture.whenStable().then(() => {
            done();
        });
    });

    it('can be navigated to', (done) => {
        fixture.whenStable().then(() => {
            router.navigate(['/account/register']).then(() => {
                expect(location.path()).toBe('/account/register');
                done();
            });
        });
    });

    it('should show done message after submit', (done) => {
        let showDone = false;
        xhr.connections.subscribe((connection: any) => {
            showDone = true;
            connection.mockRespond(new Response(<ResponseOptions>{
                body: JSON.stringify('hit')
            }));
        });
        trial.form.controls['email'].setValue('megamindbrian@gmail.com');
        trialFixture.detectChanges();
        expect(showDone).toBeFalsy();
        trial.form.controls['firstName'].setValue('Brian');
        trialFixture.detectChanges();
        trialFixture.whenStable().then(() => {
            trial.onRegister();
            expect(showDone).toBeTruthy();
            done();
        });
    });
});

