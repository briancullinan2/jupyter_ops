import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';
import {AuthUser} from "./auth-user";

@Component({
    selector: 'bc-login-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './sub.component.html',
    styleUrls: ['./sub.component.scss']
})
export class SubComponent {
    authUser = new AuthUser('', '', '', '');

}

