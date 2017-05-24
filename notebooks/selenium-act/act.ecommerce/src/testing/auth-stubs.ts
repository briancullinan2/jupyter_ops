import {Subject} from 'rxjs/Subject';
import {AuthUser} from '../app/auth/login/auth-user';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import {Response, Headers, ResponseOptions, Http} from '@angular/http';
import {RegistrationUser} from '../app/auth/register/register-user';
import {AuthManager} from '../app/auth/auth.manager';

@Injectable()
export class AuthServiceStub {
    loggedIn: Subject<boolean> = new Subject();

    constructor(public http: Http,
                public authManager: AuthManager) {
        this.isLoggedIn();
    }

    login(authUser: AuthUser): Observable<boolean> {
        return Observable.of(this.isLoggedIn());
    }

    logout(): void {
    }

    register(user: RegistrationUser): Observable<Response> {
        return this.http.post('', {});
    }

    isLoggedIn(): boolean {
        const loggedIn = true;
        this.loggedIn.next(loggedIn);
        return loggedIn;
    }
}


@Injectable()
export class AuthManagerStub {
    private tokenVar = 'TestToken';
    private serverVar = 'TestServer';

    getServer(): string {
        return this.serverVar;
    }

    getToken(): string {
        return this.tokenVar;
    }

    tokenExpired(): boolean {
        return true;
    }

    getDecodedToken(): any {
        return {
            access_token: '',
            given_name: 'B',
            family_name: 'C',
            email: 'b@c.actops.com'
        };
    }

    getHeaders(): Headers {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ${this.getToken()}`);

        return headers;
    }

    setToken(token: string): void {
        this.tokenVar = token;
    }

    setServer(server: string): void {
        this.serverVar = server;
    }

    clear(): void {
        this.tokenVar = null;
        this.serverVar = null;
    }
}
