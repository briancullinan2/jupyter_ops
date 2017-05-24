import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {PurchaseComponent} from './purchase.component';
import {FunnelLayoutComponent} from './funnel-layout/funnel.component';
import {ConfirmComponent} from './funnel-layout/confirm/confirm';
import {BillingComponent} from './funnel-layout/billing/billing';
import {SubscriptionsComponent} from '../subscriptions/subscriptions.component';
import {FunnelGuard} from './funnel-layout/funnel-guard';


export const purchaseRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        canDeactivate: [FunnelGuard],
        data: {roles: ['anonymous', 'user']},
        component: FunnelLayoutComponent,
        children: [
            {path: '', component: PurchaseComponent},
            {path: 'billing', component: BillingComponent},
            {path: 'confirm', component: ConfirmComponent},
            {path: 'account', loadChildren: '../auth/auth.module#AuthModule'},
            {path: 'subscriptions', component: SubscriptionsComponent},
            {path: 'subscriptions/:subscription', component: SubscriptionsComponent},
            {path: 'subscriptions/:subscription/:term', component: SubscriptionsComponent},
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(purchaseRoutes);

