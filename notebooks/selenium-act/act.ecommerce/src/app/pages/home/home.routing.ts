import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard} from '../../auth/auth.guard';
import {HomeComponent} from './home.component';

export const contactRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {roles: ['anonymous', 'user']},
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(contactRoutes);

