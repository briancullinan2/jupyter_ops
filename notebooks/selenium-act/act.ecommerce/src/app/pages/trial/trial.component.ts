import {Component} from '@angular/core';
import {RegistrationUser} from '../../auth/register/register-user';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TrialService} from './trial.service';
import {AuthService} from '../../auth/auth.service';
import {AuthManager} from '../../auth/auth.manager';


@Component({
    selector: 'bc-trial',
    templateUrl: './trial.component.html',
    providers: [TrialService],
    styleUrls: ['./trial.component.scss']
})
export class TrialComponent {
    public done: ReplaySubject<boolean> = new ReplaySubject();
    public registrationUser = new RegistrationUser();
    public form: FormGroup;

    constructor(public auth: AuthService,
                public builder: FormBuilder,
                public authManager: AuthManager,
                public trial: TrialService) {
        this.done.next(false);
        this.form = builder.group(this.registrationUser);
        if (this.auth.isLoggedIn()) {
            this.registrationUser.firstName = this.authManager.getDecodedToken().given_name;
            this.registrationUser.lastName = this.authManager.getDecodedToken().family_name;
            this.registrationUser.phoneNumber = this.authManager.getDecodedToken().phone_number;
            this.registrationUser.companyName = this.authManager.getDecodedToken().company;
            this.registrationUser.email = this.authManager.getDecodedToken().email;
        }
    }

    onSubmit() {
        if (this.registrationUser.firstName === '') {
            return;
        }
        this.trial.create(this.registrationUser)
            .subscribe(response2 => {
                if (response2.ok) {
                    this.done.next(true);
                }
            });
    }
}
