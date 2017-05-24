import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegistrationUser} from '../../auth/register/register-user';


@Component({
    selector: 'bc-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    public registrationUser: RegistrationUser = new RegistrationUser();
    public form: FormGroup;

    constructor(public builder: FormBuilder) {
        this.form = builder.group(this.registrationUser);
    }

    onSend() {
    }
}
