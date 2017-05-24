import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {environment} from '../../../../config/environment';
import {Http, Request, Headers} from '@angular/http';
import {AuthService} from "../auth.service";

@Component({
    selector: 'bc-reset',
    templateUrl: './reset.html'
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

    verificationCode: string;
    email: string;
    password: string;
    code: string;
    private sub: any;
    error = '';

    constructor(public router: Router,
                public auth: AuthService,
                public route: ActivatedRoute,
                public http: Http) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.email = params['email'];
        });
        this.sub = this.route.queryParams.subscribe(params => {
            this.code = params['code'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onNext() {
        this.auth.passwordReset(this.email, this.code, this.password)
            .subscribe(response => {
                if (response.ok) {
                    // TODO: go to return_url?
                } else {
                    this.error = response.statusText;
                }
            });
    }

}

