import {NgModule, } from '@angular/core';
import {FormsModule, } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';

// translation service
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateService} from '@ngx-translate/core';
import {RouterModule} from "@angular/router";
import {ImageBox} from "./test";

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        MaterialModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        RouterModule.forRoot([
            {
                path: '',
                component: AppComponent
            },

        ], {useHash: true}),
    ],
    declarations: [
        AppComponent,
        ImageBox
    ],
    providers: [
        TranslateService,
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
