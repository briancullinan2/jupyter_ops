import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BillingModel} from './billing-model';

@Component({
    selector: 'bc-funnel-billing',
    templateUrl: './billing.html',
    styleUrls: ['./billing.scss']
})
export class BillingComponent {
    public form: FormGroup;
    public billingModel: BillingModel = new BillingModel();
    public months: number[];
    public years: number[];

    static months(): number[] {
        return Array(12).fill(0).map((k, i) => i + 1);
    }

    static years(): number[] {
        const year = (new Date()).getFullYear();
        return Array(30).fill(0).map((k, i) => i + year);
    }

    constructor(private formBuilder: FormBuilder) {
        this.form = formBuilder.group(this.billingModel);
        this.years = BillingComponent.years();
        this.months = BillingComponent.months();
    }

}

