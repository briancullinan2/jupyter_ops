import {NgModule} from '@angular/core';

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const accountRoutes: Routes = [
    {
        path: 'account',
        loadChildren: './auth.module#AuthModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(accountRoutes);

@NgModule({
    imports: [
        routing
    ]
})
export class AccountModule {
}


