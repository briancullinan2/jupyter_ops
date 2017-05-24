import {Component} from '@angular/core';
import {RegistrationUser} from './register-user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../config/environment';
import {Http, Request, Headers} from '@angular/http';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AuthUser} from '../login/auth-user';

/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
@Component({
    selector: 'bc-register-page',
    templateUrl: './register.html',
    styleUrls: ['./register.scss']
})
export class AccountRegisterComponent {
    public form: FormGroup;
    public registrationUser: RegistrationUser = new RegistrationUser();
    public error = '';

    constructor(public auth: AuthService,
                public router: Router,
                public builder: FormBuilder) {
        this.form = builder.group(this.registrationUser);
    }

    onRegister() {
        this.registrationUser.password = Math.random().toString(36).substring(2);
        this.auth.register(this.registrationUser).subscribe(response => {
            if (response.ok) {
                this.auth.login(new AuthUser(this.registrationUser.email, this.registrationUser.password))
                    .subscribe(isSuccess => {
                        if (isSuccess) {
                            setTimeout(() => this.router.navigate(['/buy']));
                        } else {
                        }
                    });
                // TODO: go to return_url?
            } else {
                this.error = response.statusText;
            }
        });
    }
}


