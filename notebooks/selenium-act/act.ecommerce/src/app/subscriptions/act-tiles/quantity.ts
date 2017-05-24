import {Component, Input} from '@angular/core';
import {ProductCatalogService} from '../product-catalog.service';
import 'rxjs/add/operator/mergeMap';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-tile-quantity',
    templateUrl: './quantity.html',
    styleUrls: ['./tiles.scss']
})
export class QuantityComponent {
    @Input() public form: FormGroup;
    @Input() public term: string;

    constructor(public catalog: ProductCatalogService) {
    }

    add() {
        this.form.controls['quantity'].setValue(this.form.controls['quantity'].value + 1);
    }

    sub() {
        this.form.controls['quantity'].setValue(this.form.controls['quantity'].value - 1);
    }
}


