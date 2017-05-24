import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'bc-funnel-layout',
    templateUrl: './funnel.component.html',
    styleUrls: ['./funnel.component.scss']
})
export class FunnelLayoutComponent {
    public segments: string[];

    constructor(public router: Router) {
        this.segments = router.url.split('/');
        this.segments[2] = this.segments[2] || '';
        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.segments = router.url.split('/');
                this.segments[2] = this.segments[2] || '';
            }
        });
    }
}
