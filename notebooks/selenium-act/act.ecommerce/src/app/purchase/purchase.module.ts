import {NgModule} from '@angular/core';


import {ProductTilesComponent} from './product-tiles/product-tiles';
import {ProductTileComponent} from './product-tile/product-tile';
import {ProductDescriptionComponent} from './product-description/product-description';
import {ProductSummaryComponent} from './product-summary/product-summary';
import {PurchaseComponent} from './purchase.component';


import {routing} from './purchase.routing';
import {COMMON_MODULES} from '../shared/shared.module';
import {FunnelModule} from './funnel-layout/funnel.module';
import {LayoutModule} from '../layout/layout.module';
import {SubscriptionsModule} from '../subscriptions/subscriptions.module';


export const COMPONENTS = [
    ProductTilesComponent,
    ProductTileComponent,
    ProductDescriptionComponent,
    ProductSummaryComponent,
    PurchaseComponent
];


@NgModule({
    imports: [
        ...COMMON_MODULES,
        SubscriptionsModule,
        LayoutModule,
        FunnelModule,
        routing,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class PurchaseModule {
}


