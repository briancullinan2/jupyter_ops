import {ComponentFixture, TestBed} from '@angular/core/testing';
const assert = require('assert');
import {} from 'jasmine';
import {RouterTestingModule} from '@angular/router/testing';
import {PlatformModule} from '@angular/material';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions, ResponseOptions} from '@angular/http';
import {LayoutModule} from '../../layout/layout.module';
import {sharedModules} from '../../shared/shared.module';
import {AuthService} from '../../auth/auth.service';
import {AuthServiceStub} from '../../../testing/auth-stubs';
import {MockBackend} from '@angular/http/testing';
import {AppComponent} from '../../app.component';
import {TrialComponent} from './trial.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TrialModule} from './trial.module';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {LayoutService} from '../../layout/layout.service';
import {AuthGuard} from '../../auth/auth.guard';
import {ProductCatalogService} from '../../subscriptions/product-catalog.service';
import {Core} from "../../../testing/core";

describe('TrialComponent', function () {
    let fixture: ComponentFixture<AppComponent>;
    let router: Router;
    let location: Location;
    let xhr: MockBackend;
    let comp: AppComponent;
    let trial: TrialComponent;
    let trialFixture: ComponentFixture<TrialComponent>;

    // mock everything the SharedModule includes because we need to override AuthService
    beforeEach(() => {
        fixture = Core.createAppWithShared([TrialModule], [
            {
                path: 'trial',
                component: TrialComponent
            }
        ]);
        comp = fixture.componentInstance;
        comp.ngOnInit();
        router = fixture.debugElement.injector.get(Router);
        xhr = fixture.debugElement.injector.get(MockBackend);
        location = fixture.debugElement.injector.get(Location);
        xhr.connections.subscribe((connection: any) => {
            connection.mockRespond(new Response(<ResponseOptions>{
                body: JSON.stringify('hit')
            }));
        });
        trialFixture = TestBed.createComponent(TrialComponent);
        trial = trialFixture.componentInstance;
    });

    it('should create TrialComponent', (done) => {
        expect(comp).not.toBeNull('should be created successfully');

        fixture.whenStable().then(() => {
            done();
        });
    });

    it('can be navigated to', (done) => {
        expect(trial).not.toBeNull();
        done();
    });

    it('should show done message after submit', (done) => {
        let showDone = false;
        trial.done.subscribe((t) => {
            showDone = t;
        });
        trial.form.controls['email'].setValue('megamindbrian@gmail.com');
        trialFixture.detectChanges();
        expect(showDone).toBeFalsy();
        trial.form.controls['firstName'].setValue('Brian');
        trialFixture.detectChanges();
        trialFixture.whenStable().then(() => {
            trial.onSubmit();
            expect(showDone).toBeTruthy();
            done();
        });
    });
});

