import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ProductCatalogService} from '../../subscriptions/product-catalog.service';
import {Product} from '../../models/zuora/product';
import {LayoutService} from '../../layout/layout.service';

@Component({
    selector: 'bc-product-tile',
    templateUrl: './product-tile.html',
    styleUrls: ['./product-tile.scss']
})
export class ProductTileComponent implements OnInit {
    @Input() subscription: Product;
    products: Observable<Product[]>;
    @ViewChild('tile') tile: any;

    constructor(public router: Router,
                public catalog: ProductCatalogService,
                public layout: LayoutService) {
    }

    ngOnInit() {
        this.products = this.catalog.getProducts().map(p => p.filter(ProductCatalogService.actProducts));
        this.catalog.selectedProduct.subscribe(p => {
            setTimeout(() => {
                if (p === this.subscription.type) {
                    if (this.tile._elementRef && this.tile._elementRef.nativeElement.offsetParent !== null) {
                        this.layout.focusElement.next(this.tile._elementRef);
                    }
                }
            }, 10);
        });
    }

    notSelected(): Observable<boolean> {
        // mark the products below the currently selected product to display "accordion" style in mobile
        return this.catalog.selectedProduct.withLatestFrom(this.products,
            (selected, products) => ({selected, products}))
            .map(({selected, products}) => {
                const currentI = products.indexOf(products.filter(o => o.type === this.subscription.type)[0]);
                const selectedI = products.indexOf(products.filter(o => o.type === selected)[0]);
                return currentI > selectedI;
            });
    }

    setSelectedProduct() {
        this.catalog.selectedProduct.next(this.subscription.type);
    }
}

