import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ProductCatalogService} from '../../../subscriptions/product-catalog.service';
import {Product} from '../../../models/zuora/product';
import {SubscriptionPreview} from 'src/app/models/zuora/subscription-preview';
import {Http} from '@angular/http';
import {SubscriptionModel} from '../../../subscriptions/subscription-model';

@Component({
    selector: 'bc-subtotal',
    templateUrl: './subtotal.html',
    styleUrls: ['./subtotal.scss']
})
export class SubtotalComponent implements OnInit {
    @Input() subscription: Product;
    public agreeToTerms: boolean;
    public total: number;
    public subtotal: number;
    public tax: number;
    public updating = true;
    public today = false;
    public lineItems: { [key: string]: number } = {};
    segments: string[];

    constructor(public router: Router,
                public catalog: ProductCatalogService,
                public ref: ChangeDetectorRef,
                public http: Http) {
        catalog.previewResults.subscribe(d => this.subscriptionUpdate(d));
        catalog.selectedOptions.subscribe(() => {
            this.updating = true;
            this.ref.markForCheck();
        });
        this.segments = router.url.split('/');
        router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.segments = router.url.split('/');
            }
        });
    }

    subscriptionUpdate(data: SubscriptionPreview) {
        this.total = parseFloat(data.amount.replace(/[.,\-$]/ig, '')) / 100;
        this.subtotal = parseFloat(data.amountWithoutTax.replace(/[.,\-$]/ig, '')) / 100;
        this.tax = parseFloat(data.taxAmount.replace(/[.,\-$]/ig, '')) / 100;
        this.updating = false;
        this.lineItems = {};
        let today = '';
        this.today = false;
        for (let i = 0; i < data.invoiceItems.length; i++) {
            const name = data.invoiceItems[i]['chargeName'];
            const key = (/(aem|act!|hhc)/ig).exec(name)[0].replace('aem', 'EMarketing');
            this.lineItems[key] = (this.lineItems[key] ? this.lineItems[key] : 0)
                + parseFloat(data.invoiceItems[i]['chargeAmount'].replace(/[.,\-$]/ig, '')) / 100;
            if (today === '') {
                today = data.invoiceItems[i]['subscriptionStartDate'];
            } else if (today !== data.invoiceItems[i]['subscriptionStartDate']) {
                this.today = true;
            }
        }
        this.ref.markForCheck();
    }

    items() {
        return Object.keys(this.lineItems);
    }

    ngOnInit() {
        this.catalog.selectedOptions.next(new SubscriptionModel());
    }
}

