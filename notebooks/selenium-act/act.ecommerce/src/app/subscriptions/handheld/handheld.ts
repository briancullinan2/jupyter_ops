import {Component, Input} from '@angular/core';
import {ProductCatalogService} from '../product-catalog.service';
import 'rxjs/add/operator/mergeMap';
import {SubscriptionComponent} from '../subscription/subscription';
import {RatePlan} from '../../models/zuora/rate-plan';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../models/zuora/product';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-subscription-handheld',
    templateUrl: './handheld.html',
    styleUrls: ['../act-tiles/tiles.scss']
})
export class HandheldContactComponent extends SubscriptionComponent {
    public product: Observable<Product>;
    @Input() subscription: RatePlan;
    // TODO: use emit instead of Input to achieve the same effect?
    @Input() public form: FormGroup;

    constructor(protected catalog: ProductCatalogService) {
        super(catalog);
    }

}
