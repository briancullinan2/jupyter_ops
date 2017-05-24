import {NgModule} from '@angular/core';

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const pagesRoutes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
    },
    {
        path: 'trial',
        loadChildren: './trial/trial.module#TrialModule'
    },
    {
        path: 'demo',
        loadChildren: './demo/demo.module#DemoModule'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(pagesRoutes);

@NgModule({
    imports: [
        routing
    ]
})
export class PagesModule {
}


