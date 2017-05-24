import {Component} from '@angular/core';
import {ProductCatalogService} from '../../../subscriptions/product-catalog.service';

@Component({
    selector: 'bc-funnel-confirm',
    templateUrl: './confirm.html',
    styleUrls: ['./confirm.scss']
})
export class ConfirmComponent {

    public product: { product: string };

    constructor(public catalog: ProductCatalogService) {
        this.catalog.selectedProduct.withLatestFrom(this.catalog.getProducts(), (s, p) => ({s, p}))
            .subscribe(({s, p}) => {
                console.log(s);
                this.product = {product: p.filter(ps => ps.type === s)[0].name};
            });
    }

}

