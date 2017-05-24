import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountLoginComponent} from './login/login';
import {AccountRegisterComponent} from './register/register';
import {ResetPasswordComponent} from './reset/reset';
import {ForgotPasswordComponent} from './forgot/forgot';
import {LogoutComponent} from './logout/logout';


export const accountRoutes: Routes = [
    {
        path: 'logout',
        component: LogoutComponent,
        data: {roles: ['anonymous', 'user']}
    },
    {
        path: 'login',
        component: AccountLoginComponent
    },
    {
        path: 'register',
        component: AccountRegisterComponent
    },
    {
        path: 'reset/:email',
        component: ResetPasswordComponent
    },
    {
        path: 'forgot',
        component: ForgotPasswordComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(accountRoutes);

