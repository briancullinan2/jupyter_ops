import 'rxjs/add/operator/let';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AuthUser} from './auth-user';
import {AuthManager} from "../auth.manager";


@Component({
    selector: 'bc-login-page',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class AccountLoginComponent {
    authUser = new AuthUser('', '');
    message: string;

    constructor(public router: Router,
                public authService: AuthService) {
    }

    login(): void {
        this.authService.login(this.authUser)
            .subscribe(isSuccess => {
                    if (isSuccess) {
                        setTimeout(() => this.router.navigate(['/buy']));
                    } else {
                        this.communicateError('User login failed.');
                    }
                },
                err => {
                    // "Response with status: 401 Unauthorized for URL: https://actforwebdev.actops.com/act.web.api/authorize"
                    if (err.mesage && err.message.indexOf('Response with status: 401 Invalid logon provided') > -1) {
                        this.communicateError('Verify user name and password');
                    } else if (err.mesage && err.message.indexOf('Response with status: 401 Unauthorized') > -1) {
                        this.communicateError('Verify database name is correct');
                    } else {
                        this.communicateError('User login failed.');
                    }
                });
    }

    private communicateError(msg: string): void {
        this.message = msg;
    }

}
