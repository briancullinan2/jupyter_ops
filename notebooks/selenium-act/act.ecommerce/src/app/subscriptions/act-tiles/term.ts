import {Component, Input} from '@angular/core';
import {ProductCatalogService} from '../product-catalog.service';
import 'rxjs/add/operator/mergeMap';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-act-terms',
    templateUrl: './term.html',
    styleUrls: ['./tiles.scss']
})
export class ActTermsComponent {
    @Input() public form: FormGroup;

    constructor(public catalog: ProductCatalogService) {
    }
}
