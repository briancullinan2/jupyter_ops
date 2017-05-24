import {NgModule} from '@angular/core';

import {AccountLoginComponent} from './login/login';
import {AccountRegisterComponent} from './register/register';
import {ResetPasswordComponent} from './reset/reset';
import {ForgotPasswordComponent} from './forgot/forgot';
import {LogoutComponent} from './logout/logout';

import {routing} from './auth.routing';
import {COMMON_MODULES} from '../shared/shared.module';

export const COMPONENTS = [
    AccountLoginComponent,
    LogoutComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
];


@NgModule({
    imports: [
        ...COMMON_MODULES,
        routing
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class AuthModule {
}


