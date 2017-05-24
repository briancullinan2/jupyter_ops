import {NgModule} from '@angular/core';

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const buyRoutes: Routes = [
    {
        path: 'buy',
        loadChildren: './purchase.module#PurchaseModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(buyRoutes);

@NgModule({
    imports: [
        routing
    ]
})
export class BuyModule {
}


