import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AuthGuard} from '../../auth/auth.guard';
import {DemoComponent} from './demo.component';


export const trialRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {roles: ['anonymous', 'user']},
        component: DemoComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(trialRoutes);

