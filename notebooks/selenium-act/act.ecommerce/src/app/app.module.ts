import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

// sub-modules for lazy loading
import {LayoutModule} from './layout/layout.module';
import {BuyModule} from './purchase/buy.module';
import {PagesModule} from './pages/pages.module';
import {AccountModule} from './auth/account.module';

// routing
import {routing} from './app.routing';
import {SharedModule, sharedModules} from './shared/shared.module';
import {APP_BASE_HREF} from '@angular/common';
import {AuthService} from "./auth/auth.service";
import {Http, RequestOptions, XHRBackend} from "@angular/http";
import {ActHttp} from "./shared/act-http";
import {Router} from "@angular/router";
import {AuthManager} from "./auth/auth.manager";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule.forRoot(),
        ...sharedModules,

        routing,
        BuyModule,
        PagesModule,
        AccountModule,
        LayoutModule,
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
