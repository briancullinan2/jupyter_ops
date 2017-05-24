import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../models/zuora/product';
import {ProductCatalogService} from '../product-catalog.service';
import 'rxjs/add/operator/mergeMap';
import {SubscriptionComponent} from '../subscription/subscription';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-subscription-actpro',
    templateUrl: './actpro.html'
})
export class ActProComponent extends SubscriptionComponent {
    @Input() public form: FormGroup;
    public product: Observable<Product>;
    products: Observable<Product[]>;

    constructor(protected catalog: ProductCatalogService) {
        super(catalog);
        this.products = this.catalog.getProducts().map(p => p.filter(ProductCatalogService.actProducts));
    }

}
