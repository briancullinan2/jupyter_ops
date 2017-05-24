import {NgModule} from '@angular/core';


import {ActEmarketingDialogComponent} from './actemarketing/actemarketing-dialog';
import {SubscriptionComponent} from './subscription/subscription';
import {SubscriptionsComponent} from './subscriptions.component';


import {HandheldContactComponent} from './handheld/handheld';
import {SupportComponent} from './support/support';
import {ActPremiumComponent} from './actpremium/actpremium';
import {ActEmarketingComponent} from './actemarketing/actemarketing';
import {ActPremiumCloudComponent} from './actpremiumcloud/actpremiumcloud';


import {COMMON_MODULES} from '../shared/shared.module';
import {FormBuilder} from '@angular/forms';
import {ActTilesComponent} from './act-tiles/tiles';
import {ActProComponent} from './actpro/actpro';
import {ActTermsComponent} from './act-tiles/term';
import {QuantityComponent} from './act-tiles/quantity';
import {ContactsComponent} from "./actemarketing/actemarketing-tile";
import {DevicesComponent} from "./handheld/handheld-tile";


export const COMPONENTS = [
    ActPremiumCloudComponent,
    ActEmarketingComponent,
    SupportComponent,
    ActPremiumComponent,
    HandheldContactComponent,

    SubscriptionsComponent,
    SubscriptionComponent,
    ActEmarketingDialogComponent,
    ActTilesComponent,
    ActProComponent,
    ActTermsComponent,
    QuantityComponent,
    ContactsComponent,
    DevicesComponent
];


@NgModule({
    imports: [
        ...COMMON_MODULES,
    ],
    providers: [FormBuilder],
    declarations: COMPONENTS,
    bootstrap: [ActEmarketingDialogComponent],
    exports: COMPONENTS
})
export class SubscriptionsModule {
}


