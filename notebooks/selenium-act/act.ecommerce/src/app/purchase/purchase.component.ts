import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'bc-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {

    constructor(public router: Router) {
    }
}
