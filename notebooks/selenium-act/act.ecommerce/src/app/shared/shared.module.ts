import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {
    MdButtonModule, MdCardModule, MdCheckboxModule, MdDialogModule, MdIconModule, MdInputModule,
    MdMenuModule,
    MdOptionModule, MdProgressSpinnerModule, MdSelectionModule, MdSelectModule,
    MdSidenavModule,
    MdToolbarModule, MdTooltipModule, OverlayModule
} from '@angular/material';
import {FunnelGuard} from '../purchase/funnel-layout/funnel-guard';
import {AuthService} from '../auth/auth.service';
import {AuthGuard} from '../auth/auth.guard';
import {RegisterFormComponent} from '../auth/register/register-form';
import {ProductCatalogService} from '../subscriptions/product-catalog.service';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {PlatformModule} from '@angular/material';
import {ActHttp} from './act-http';
import {AuthManager} from '../auth/auth.manager';

export const appRoutingProviders = [
    AuthService,
    AuthGuard,
    FunnelGuard,
    ProductCatalogService,
    AuthManager,
    //{provide: Http, useClass: ActHttp, deps: [XHRBackend, RequestOptions, AuthManager]},
];

// this is from MaterialModule which is deprecated
export const materialModules = [
    PlatformModule,
    OverlayModule,
    MdInputModule,
    MdOptionModule,
    MdButtonModule,
    MdSelectModule,
    MdSelectionModule,
    MdCardModule,
    MdSidenavModule,
    MdIconModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdMenuModule,
    MdTooltipModule,
    MdDialogModule,
    MdProgressSpinnerModule,
];

export const sharedModules: any[] = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    HttpModule,
    ...materialModules
];

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const SHARED_COMPONENTS = [
    RegisterFormComponent
];

@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        ...sharedModules,
    ],
    declarations: SHARED_COMPONENTS,
    exports: SHARED_COMPONENTS,
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                ...appRoutingProviders, // AuthGuard, AuthService, AuthManager
            ]
        };
    }
}

export const COMMON_MODULES = [
    ...sharedModules,
    SharedModule
];
