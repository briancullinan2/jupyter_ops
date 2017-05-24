import {Component, Input} from '@angular/core';
import {ProductCatalogService} from '../product-catalog.service';
import 'rxjs/add/operator/mergeMap';
import {SubscriptionComponent} from '../subscription/subscription';
import {MdDialog} from '@angular/material';
import {ActEmarketingDialogComponent} from './actemarketing-dialog';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../models/zuora/product';
import {FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-subscription-actemarketing',
    templateUrl: './actemarketing.html',
    styleUrls: ['../act-tiles/tiles.scss']
})
export class ActEmarketingComponent extends SubscriptionComponent {
    public product: Observable<Product>;
    @Input() public form: FormGroup;
    public blocks: number[];

    static blocks() {
        return Array.from(Array(46).fill(0).keys());
    }

    constructor(protected catalog: ProductCatalogService, public dialog: MdDialog) {
        super(catalog);
        this.blocks = ActEmarketingComponent.blocks();
    }

    openDialog() {
        this.dialog.open(ActEmarketingDialogComponent);
    }

}
