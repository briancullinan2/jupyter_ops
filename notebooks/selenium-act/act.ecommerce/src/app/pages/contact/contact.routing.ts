import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AuthGuard} from '../../auth/auth.guard';
import {ContactComponent} from './contact.component';


export const contactRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {roles: ['anonymous', 'user']},
        component: ContactComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(contactRoutes);

