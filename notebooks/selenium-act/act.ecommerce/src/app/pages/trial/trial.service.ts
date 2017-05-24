import {Injectable} from '@angular/core';
import {environment} from '../../../../config/environment';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../auth/auth.service';
import {AuthUser} from '../../auth/login/auth-user';
import {RegistrationUser} from '../../auth/register/register-user';
import {AuthManager} from '../../auth/auth.manager';

@Injectable()
export class TrialService {

    constructor(public http: Http,
                public auth: AuthService,
                public authManager: AuthManager) {
    }

    create(user: RegistrationUser): Observable<Response> {
        if (this.auth.isLoggedIn()) {
            return this.register();
        } else {
            // create account first
            user.password = Math.random().toString(36).substring(2);
            const authUser = new AuthUser(user.email, user.password);
            return this.auth.register(user).flatMap((response) => {
                if (response.ok) {
                    return this.auth.login(authUser).flatMap(isSuccess => {
                        if (isSuccess) {
                            return this.register();
                        } else {
                            throw response.text();
                        }
                    });
                } else {
                    throw response.text();
                }
            });
        }
    }

    private register() {
        return this.registerTrial({
            BillingCycle: 'Annual',
            Cur: 'USD',
            Country: 'United States',
            DatabaseCurrency: 'USD,$'
        });
    }

    private registerTrial(data: { [key: string]: string }): Observable<Response> {
        const headers = this.authManager.getHeaders();
        return this.http.post(environment.trialUrl, data, {headers: headers});
    }

}
