import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../../config/environment';
import {Http, Request, Headers} from '@angular/http';
import {AuthService} from "../auth.service";

@Component({
    selector: 'bc-forgot',
    templateUrl: './forgot.html'
})
export class ForgotPasswordComponent {
    email: string;
    error = '';

    constructor(public auth: AuthService,
                public router: Router,
                public http: Http) {
    }

    onNext() {
        this.auth.forgot(this.email).subscribe(response => {
            if (response.ok) {
                // TODO: go to return_url?
            } else {
                this.error = response.statusText;
            }
        });
    }

}

