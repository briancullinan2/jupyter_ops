import {Component, Input} from '@angular/core';
import {ProductCatalogService} from '../product-catalog.service';
import 'rxjs/add/operator/mergeMap';
import {SubscriptionComponent} from '../subscription/subscription';
import {RatePlan} from '../../models/zuora/rate-plan';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../models/zuora/product';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-subscription-support',
    templateUrl: './support.html',
    styleUrls: ['../act-tiles/tiles.scss']
})
export class SupportComponent extends SubscriptionComponent {
    @Input() public form: FormGroup;
    @Input() subscription: RatePlan;
    public product: Observable<Product>;

    constructor(public catalog: ProductCatalogService) {
        super(catalog);
    }

}
