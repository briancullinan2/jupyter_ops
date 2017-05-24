import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {RegistrationUser} from '../../auth/register/register-user';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
    selector: 'bc-trial',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
    public done: ReplaySubject<boolean> = new ReplaySubject();
    public registrationUser = new RegistrationUser();
    public form: FormGroup;

    constructor(public http: Http, public builder: FormBuilder) {
        this.done.next(false);
        this.form = builder.group(this.registrationUser);
    }

    onSubmit() {
        // TODO: insert trial API here
    }
}
