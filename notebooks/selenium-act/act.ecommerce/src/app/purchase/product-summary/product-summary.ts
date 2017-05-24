import { Component } from '@angular/core';
import {ProductCatalogService} from '../../subscriptions/product-catalog.service';

@Component({
    selector: 'bc-product-summary',
    templateUrl: './product-summary.html',
    styleUrls: ['./product-summary.scss']
})
export class ProductSummaryComponent {

    public billed = 'monthly';

    constructor(public catalog: ProductCatalogService) {  }


}

