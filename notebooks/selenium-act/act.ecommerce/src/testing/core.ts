import {PlatformModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {BaseRequestOptions, Http, XHRBackend} from '@angular/http';
import {LayoutModule} from '../app/layout/layout.module';
import {sharedModules} from '../app/shared/shared.module';
import {AuthGuard} from '../app/auth/auth.guard';
import {ProductCatalogService} from '../app/subscriptions/product-catalog.service';
import {LayoutService} from '../app/layout/layout.service';
import {AuthService} from '../app/auth/auth.service';
import {AuthManagerStub, AuthServiceStub} from './auth-stubs';
import {MockBackend} from '@angular/http/testing';
import {AppComponent} from '../app/app.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthManager} from '../app/auth/auth.manager';
import {NgModule} from '@angular/core';
import {Route} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
export class Core {
    static createAppWithShared(modules: NgModule[] = [], routes: Route[] = []): ComponentFixture<AppComponent> {
        TestBed.configureTestingModule({
            imports: [
                PlatformModule,
                BrowserModule,
                BrowserAnimationsModule,
                RouterTestingModule.withRoutes([
                    {
                        path: 'buy',
                        loadChildren: '../app/purchase/purchase.module#PurchaseModule'
                    },
                    ...routes
                ]),
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (http: Http) => new TranslateFakeLoader(),
                        deps: [Http]
                    }
                }),
                LayoutModule,
                ...sharedModules,
                ...modules
            ],
            providers: [
                AuthGuard,
                ProductCatalogService,
                LayoutService,
                {provide: AuthManager, useClass: AuthManagerStub},
                {provide: AuthService, useClass: AuthServiceStub},
                {
                    provide: Http,
                    useFactory: (backend: XHRBackend, options: BaseRequestOptions) => new Http(backend, options),
                    deps: [MockBackend, BaseRequestOptions]
                },
                MockBackend,
                BaseRequestOptions
            ],
            declarations: [
                AppComponent,
            ],
        });
        return TestBed.createComponent(AppComponent);
    }
}
