import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';


@Component({
    selector: 'bc-dialog-emarketing',
    templateUrl: './actemarketing-dialog.html',
})
export class ActEmarketingDialogComponent {

    constructor(public dialogRef: MdDialogRef<ActEmarketingDialogComponent>) {}
}

