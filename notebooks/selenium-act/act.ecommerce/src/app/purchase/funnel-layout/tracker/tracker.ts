import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ProductCatalogService} from '../../../subscriptions/product-catalog.service';


@Component({
    selector: 'bc-tracker',
    templateUrl: './tracker.html',
    styleUrls: ['./tracker.scss']
})
export class TrackerComponent {
    segments: string[];

    constructor(public router: Router, public catalog: ProductCatalogService) {
        this.segments = router.url.split('/');
        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.segments = router.url.split('/');
                if (this.segments[2] !== 'confirm') {
                    this.catalog.recentlyConfirmed.next(false);
                }
            }
        });
    }

}


