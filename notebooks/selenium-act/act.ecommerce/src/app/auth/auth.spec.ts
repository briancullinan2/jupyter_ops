import {} from 'jasmine';
import {AuthService} from './auth.service';
import {ComponentFixture, inject} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {XHRBackend} from '@angular/http';
import {AuthGuard} from './auth.guard';
import {Core} from '../../testing/core';
import {AppComponent} from '../app.component';
import {AuthServiceStub} from "../../testing/auth-stubs";

describe('AuthService (mockBackend)', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        fixture = Core.createAppWithShared([], [
            {
                path: 'account',
                loadChildren: './auth.module#AuthModule'
            }
        ]);
    });

    it('can instantiate service when service is injected',
        inject([AuthService], (service: AuthService) => {
            expect(service instanceof AuthServiceStub).toBe(true);
        }));

    it('can instantiate AuthGuard',
        inject([AuthGuard], (service: AuthGuard) => {
            expect(service instanceof AuthGuard).toBe(true);
        }));

    it('can provide the mockBackend as XHRBackend',
        inject([XHRBackend], (backend: MockBackend) => {
            expect(backend).not.toBeNull('backend should be provided');
        })
    );

});


