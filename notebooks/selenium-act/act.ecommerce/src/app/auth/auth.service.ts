import {Injectable} from '@angular/core';
import {Http, Headers, Request, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AuthUser} from './login/auth-user';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {environment} from '../../../config/environment';
import {RegistrationUser} from './register/register-user';
import {AuthManager} from './auth.manager';

@Injectable()
export class AuthService {
    private tokenId = 'token';
    private serverId = 'api_server';
    public loggedIn: ReplaySubject<boolean> = new ReplaySubject();

    static getLoginHeaders() {
        const headers = new Headers();
        headers.append('Authorization', `Basic ${btoa(`${environment.client_id}:${environment.client_secret}`)}`);
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    }

    constructor(public http: Http,
                public authManager: AuthManager) {
        this.isLoggedIn();
    }

    clear(): void {
        localStorage.removeItem(this.tokenId);
        localStorage.removeItem(this.serverId);
    }

    isLoggedIn(): boolean {
        const loggedIn = !!this.authManager.getToken();
        this.loggedIn.next(loggedIn);
        return loggedIn;
    }

    login(authUser: AuthUser): Observable<boolean> {
        const headers = AuthService.getLoginHeaders();
        const body = new URLSearchParams();
        const data: { [key: string]: any } = {
            username: authUser.name,
            password: authUser.password,
            grant_type: environment.grant_type,
            scope: environment.scope,
        };
        Object.keys(data).forEach(k => body.set(k, (data[k] || '').toString()));
        const req = new Request({
            method: 'POST',
            url: environment.tokenUrl,
            headers: headers,
            body: body.toString()
        });
        return this.http.request(req)
            .map(res => this.extractToken(res, environment.tokenUrl))
            .catch(error => {
                return Observable.throw(new Error(error));
            });
    }

    logout(): void {
        this.clear();
        this.isLoggedIn();
    }

    forgot(email: string) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const body = new URLSearchParams();
        const data: { [key: string]: string } = {
            email: email,
            callbackUrl: window.location.host + '/account/reset'
        };
        Object.keys(data).forEach(k => body.set(k, data[k].toString()));
        return this.http.post(environment.forgotUrl, body.toString(), {headers: headers});
    }

    passwordReset(email: string, code: string, newPassword: string) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const body = new URLSearchParams();
        const data: { [key: string]: string } = {
            email: email,
            code: code,
            password: newPassword,
            callbackUrl: window.location.host + '/account/reset'
        };
        Object.keys(data).forEach(k => body.set(k, data[k].toString()));
        return this.http.post(environment.resetUrl, body.toString(), {headers: headers});
    }

    register(user: RegistrationUser) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const body = new URLSearchParams();
        const data: { [key: string]: string } = user;
        data['country'] = 'United States';
        Object.keys(data).forEach(k => body.set(k, data[k].toString()));
        return this.http.post(environment.registerUrl, body.toString(), {headers: headers});
    }

    private extractToken(res: Response, url: string): boolean {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        const success = res.status === 200;

        if (success) {
            const token = res.text();
            this.authManager.setToken(token);
            this.authManager.setServer(url);
        }

        this.isLoggedIn();
        return success;
    }

}
