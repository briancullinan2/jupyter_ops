import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RegistrationUser} from './register-user';

/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
@Component({
    selector: 'bc-register-form',
    templateUrl: './register-form.html',
    styleUrls: ['./register-form.scss']
})
export class RegisterFormComponent {
    @Input() public form: FormGroup;
    @Input() public registrationUser: RegistrationUser;

    constructor() {
        this.onInit();
    }

    onInit() {
    }
}


