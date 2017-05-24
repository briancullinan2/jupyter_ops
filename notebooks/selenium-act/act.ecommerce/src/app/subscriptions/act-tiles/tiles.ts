import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../models/zuora/product';
import {ProductCatalogService} from '../product-catalog.service';
import 'rxjs/add/operator/mergeMap';


@Component({
    selector: 'bc-act-tiles',
    templateUrl: './tiles.html',
    styleUrls: ['./tiles.scss']
})
export class ActTilesComponent {
    public product: Observable<Product>;
    products: Observable<Product[]>;

    constructor(public catalog: ProductCatalogService) {
        this.products = this.catalog.getProducts().map(p => p.filter(ProductCatalogService.actProducts));
    }

}
