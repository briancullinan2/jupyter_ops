import {Component, Input} from '@angular/core';
import {ProductCatalogService} from '../product-catalog.service';
import 'rxjs/add/operator/mergeMap';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-tile-contacts',
    templateUrl: './actemarketing-tile.html',
    styleUrls: ['../act-tiles/tiles.scss']
})
export class ContactsComponent {
    @Input() public form: FormGroup;
    @Input() public name: string;
    @Input() public label = ' ';

    constructor(public catalog: ProductCatalogService) {
    }

    add() {
        this.form.controls[this.name].setValue(this.form.controls[this.name].value + 1);
    }

    sub() {
        this.form.controls[this.name].setValue(this.form.controls[this.name].value - 1);
    }
}


