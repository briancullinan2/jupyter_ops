import {Component} from '@angular/core';
import {AuthService} from '../../auth/auth.service';


@Component({
    selector: 'bc-account-links',
    templateUrl: './account-links.html',
})
export class AccountLinksComponent {

    constructor(public authService: AuthService) {
        this.authService.isLoggedIn();
    }

}
