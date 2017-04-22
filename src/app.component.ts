import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';


@Component({
    selector: 'bc-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TranslateService],
    template: '<image></image><router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    public route: Subject<string> = new Subject();

    constructor(
        public router: Router) {
        /**
         * Selectors can be applied with the `select` operator which passes the state
         * tree to the provided selector
         */
    }

}
