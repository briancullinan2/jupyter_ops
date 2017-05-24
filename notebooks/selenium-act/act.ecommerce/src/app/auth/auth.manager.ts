import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import {JwtHelper} from 'angular2-jwt/angular2-jwt';

@Injectable()
export class AuthManager {
    private tokenId = 'token';
    private serverId = 'api_server';

    constructor() {
    }

    getServer(): string {
        return localStorage.getItem(this.serverId);
    }

    getToken(): string {
        return localStorage.getItem(this.tokenId);
    }

    getDecodedToken(): any {
        const helper = new JwtHelper();
        const token = JSON.parse(this.getToken());
        if (token != null) {
            return helper.decodeToken(token.access_token);
        } else {
            return null;
        }
    }

    tokenExpired(): boolean {
        const expires = false;
        const token = this.getDecodedToken();
        const now: any = new Date().getTime() / 1000;
        if (token && token.auth_time) {
            const expire: any = new Date(token.auth_time).getTime() + 3600;
            const expiresIn = expire - now;
            return expiresIn < 1;
        } else {
            return expires;
        }
    }

    getHeaders(): Headers {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + JSON.parse(this.getToken()).access_token);

        return headers;
    }

    setToken(token: string): void {
        localStorage.setItem(this.tokenId, token);
    }

    setServer(server: string): void {
        localStorage.setItem(this.serverId, server);
    }

    clear(): void {
        localStorage.removeItem(this.tokenId);
        localStorage.removeItem(this.serverId);
    }
}
