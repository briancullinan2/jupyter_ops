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
import {DemoComponent} from './demo.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoModule} from './demo.module';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {LayoutService} from '../../layout/layout.service';
import {AuthGuard} from '../../auth/auth.guard';
import {ProductCatalogService} from '../../subscriptions/product-catalog.service';
import {Core} from "../../../testing/core";

describe('DemoComponent', function () {
    let fixture: ComponentFixture<AppComponent>;
    let router: Router;
    let location: Location;
    let xhr: MockBackend;
    let comp: AppComponent;
    let trial: DemoComponent;
    let trialFixture: ComponentFixture<DemoComponent>;

    // mock everything the SharedModule includes because we need to override AuthService
    beforeEach(() => {
        fixture = Core.createAppWithShared([DemoModule], [
            {
                path: 'demo',
                component: DemoComponent
            }
        ]);
        comp = fixture.componentInstance;
        comp.ngOnInit();
        router = fixture.debugElement.injector.get(Router);
        xhr = fixture.debugElement.injector.get(MockBackend);
        location = fixture.debugElement.injector.get(Location);
        trialFixture = TestBed.createComponent(DemoComponent);
        trial = trialFixture.componentInstance;
    });

    it('should create component', (done) => {
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
            trial.onSubmit();
            expect(showDone).toBeTruthy();
            done();
        });
    });
});

