import 'rxjs/add/operator/let';
import {Observable} from 'rxjs/Observable';
import {Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LayoutService} from './layout/layout.service';
import {NavigationEnd, Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {AuthService} from './auth/auth.service';

@Component({
    selector: 'bc-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TranslateService, LayoutService, AuthService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    public route: Subject<string> = new Subject();

    constructor(public layout: LayoutService,
                public router: Router) {
        /**
         * Selectors can be applied with the `select` operator which passes the state
         * tree to the provided selector
         */
    }

    ngOnInit() {
        const that = this;
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                that.route.next(e.url.split(/[\/#]/ig)[1] || 'home');
            }
        });
    }

    closeSidenav() {
        this.layout.sidebarOpen = Observable.of(false);
    }

    openSidenav() {
        this.layout.sidebarOpen = Observable.of(true);
    }

}
