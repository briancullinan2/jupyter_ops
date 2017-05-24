import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RatePlan} from '../models/zuora/rate-plan';
import 'rxjs/add/observable/throw';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SubscriptionModel} from './subscription-model';
import {ProductCatalogService} from './product-catalog.service';

@Component({
    selector: 'bc-subscriptions',
    templateUrl: './subscriptions.component.html',
    styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent {
    public form: FormGroup;
    public subscriptionModel: SubscriptionModel = new SubscriptionModel();
    public subscriptionCache: RatePlan[] = [
        <RatePlan>{
            productId: '1',
            name: 'ActPremiumCloud'
        },
        <RatePlan>{
            productId: '2',
            name: 'ActPremium'
        },
        <RatePlan>{
            productId: '3',
            name: 'ActPro'
        },
        <RatePlan>{
            productId: '4',
            name: 'ActEmarketing'
        },
        <RatePlan>{
            productId: '5',
            name: 'HandheldContact'
        },
        <RatePlan>{
            productId: '6',
            name: 'Support'
        }
    ];
    public subscriptions: RatePlan[];

    getProductsForCloud(p: string) {
        return this.subscriptionCache.filter(s => s.name === p || s.name === 'ActEmarketing'
        || s.name === 'HandheldContact' || s.name === 'Support');
    }

    constructor(public formBuilder: FormBuilder,
                public route: ActivatedRoute,
                public catalog: ProductCatalogService) {
        route.params.subscribe(e => {
            if (e['subscription']) {
                this.catalog.selectedProduct.next(e['subscription']);
                this.catalog.selectedTerm.next(e['term'] || 'Annual');
            }
        });
        this.catalog.selectedOptions.subscribe(o => this.subscriptionModel = o);
        this.catalog.selectedProduct.subscribe(p => this.subscriptions = this.getProductsForCloud(p));
        this.form = formBuilder.group(this.subscriptionModel);
        this.form.valueChanges
            .debounceTime(500)
            .subscribe(d => this.catalog.selectedOptions.next(d));
    }

}

