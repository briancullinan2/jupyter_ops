import {Injectable} from '@angular/core';
import {
    Http,
    Headers,
    Request,
    Response,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs
} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import {environment} from '../../../config/environment';
import {AuthManager} from '../auth/auth.manager';

@Injectable()
export class ActHttp extends Http {
    constructor(backend: ConnectionBackend,
                defaultOptions: RequestOptions,
                private authManager: AuthManager) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }


    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        const args = options ? options : {headers: this.authManager.getHeaders()};

        if (this.authManager.tokenExpired()) {
            return this.attemptRefresh({status: 401})
                .switchMap(response => {
                    return super.get(url, {headers: this.authManager.getHeaders()})
                        .catch(error => Observable.throw(error));
                });
        } else {
            return super.get(url, args)
                .catch(error => {
                    this.attemptRefresh(error);
                    return super.get(url, {headers: this.authManager.getHeaders()})
                        .catch(error2 => Observable.throw(error2));
                });
        }
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        const args = options ? options : {headers: this.authManager.getHeaders()};

        if (this.authManager.tokenExpired()) {
            return this.attemptRefresh({status: 401})
                .switchMap(response => {
                    return super.post(url, body, {headers: this.authManager.getHeaders()})
                        .catch(error => Observable.throw(error));
                });
        } else {
            return super.post(url, body, args)
                .catch(error => {
                    this.attemptRefresh(error);
                    return super.put(url, body, {headers: this.authManager.getHeaders()})
                        .catch(error2 => Observable.throw(error2));
                });
        }
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        const args = options ? options : {headers: this.authManager.getHeaders()};

        if (this.authManager.tokenExpired()) {
            return this.attemptRefresh({status: 401})
                .switchMap(response => {
                    return super.put(url, body, {headers: this.authManager.getHeaders()})
                        .catch(error => Observable.throw(error));
                });
        } else {
            return super.put(url, body, args)
                .catch(error => {
                    this.attemptRefresh(error);
                    return super.put(url, body, {headers: this.authManager.getHeaders()})
                        .catch(error2 => Observable.throw(error2));
                });
        }
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        const args = options ? options : {headers: this.authManager.getHeaders()};
        if (this.authManager.tokenExpired()) {
            return this.attemptRefresh({status: 401})
                .switchMap(response => {
                    return super.delete(url, {headers: this.authManager.getHeaders()})
                        .catch(error => Observable.throw(error));
                });
        } else {
            return super.delete(url, args)
                .catch(error => {
                    this.attemptRefresh(error);
                    return super.delete(url, {headers: this.authManager.getHeaders()})
                        .catch(error2 => Observable.throw(error2));
                });
        }
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        if (this.authManager.tokenExpired()) {
            return this.attemptRefresh({status: 401})
                .switchMap(response => {
                    return super.patch(url, body, options)
                        .catch(error => Observable.throw(error));
                });
        } else {
            return super.patch(url, body, options)
                .catch(error => Observable.throw(error));
        }
    }

    attemptRefresh(error: any): Observable<boolean> {
        if (error.status === 401) {
            const headers = this.authManager.getHeaders();

            const me = this;
            return super.get(environment.tokenUrl, {headers})
                .map(res => {
                    me.authManager.setToken(res.text());
                    return Observable.of(true);
                })
                .catch(error2 => Observable.of(false));

        } else {
            return Observable.throw(error);
        }
    }

}


