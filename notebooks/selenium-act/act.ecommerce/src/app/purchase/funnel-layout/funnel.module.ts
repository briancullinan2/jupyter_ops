import {NgModule} from '@angular/core';


import {SubtotalComponent} from './subtotal/subtotal';
import {TrackerComponent} from './tracker/tracker';
import {BillingComponent} from './billing/billing';
import {ConfirmComponent} from './confirm/confirm';
import {LayoutModule} from '../../layout/layout.module';
import {FunnelFooterComponent} from './footer/footer';
import {COMMON_MODULES} from '../../shared/shared.module';
import {SubscriptionsModule} from '../../subscriptions/subscriptions.module';
import {FunnelLayoutComponent} from './funnel.component';


export const COMPONENTS = [
    SubtotalComponent,
    TrackerComponent,
    BillingComponent,
    ConfirmComponent,
    FunnelFooterComponent,
    FunnelLayoutComponent
];


@NgModule({
    imports: [
        ...COMMON_MODULES,
        SubscriptionsModule,
        LayoutModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class FunnelModule {
}


