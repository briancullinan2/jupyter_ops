import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../models/zuora/product';
import { ProductCatalogService } from '../product-catalog.service';
import { RatePlan } from '../../models/zuora/rate-plan';
import 'rxjs/add/operator/mergeMap';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-subscription',
    templateUrl: './subscription.html'
})
export class SubscriptionComponent implements OnInit {
    @Input() subscription: RatePlan;
    @Input() public form: FormGroup;
    public product: Observable<Product>;

    constructor(protected catalog: ProductCatalogService) {

    }

    ngOnInit() {
        this.product = this.catalog.getProducts()
            .mergeMap((p: Product[]) => p)
            .first((p: Product) => {
                return p.id === this.subscription.productId;
            });
    }

}
