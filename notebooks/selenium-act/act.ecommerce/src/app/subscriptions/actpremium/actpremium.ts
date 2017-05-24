import {Component, Input} from '@angular/core';
import { ProductCatalogService } from '../product-catalog.service';
import 'rxjs/add/operator/mergeMap';
import {SubscriptionComponent} from '../subscription/subscription';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../models/zuora/product';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-subscription-actpremium',
    templateUrl: './actpremium.html'
})
export class ActPremiumComponent extends SubscriptionComponent {
    public product: Observable<Product>;
    @Input() public form: FormGroup;

    constructor(protected catalog: ProductCatalogService) {
        super(catalog);
    }
}
