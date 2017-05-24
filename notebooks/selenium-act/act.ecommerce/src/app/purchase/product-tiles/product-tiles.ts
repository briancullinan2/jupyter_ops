import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../models/zuora/product';
import { ProductCatalogService } from '../../subscriptions/product-catalog.service';

@Component({
    selector: 'bc-product-tiles',
    templateUrl: './product-tiles.html'
})
export class ProductTilesComponent implements OnInit {
    products: Observable<Product[]>;

    constructor(public router: Router, private catalog: ProductCatalogService) {
    }

    ngOnInit() {
        this.products = this.catalog.getProducts().map(p => p.filter(ProductCatalogService.actProducts));
    }

}
