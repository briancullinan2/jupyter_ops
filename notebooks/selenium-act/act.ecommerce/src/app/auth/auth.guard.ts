import {Injectable} from '@angular/core';
import {
    Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    redirect: any = null;

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
        const loggedIn = localStorage.getItem('token');
        const userRoles = [loggedIn ? 'user' : 'anonymous'];
        const roles = <Array<string>>route.data['roles'] || <Array<string>>route.parent.data['roles'];
        const canActivate = (roles == null || userRoles.filter((r: string) => roles.indexOf(r) !== -1).length > 0);
        if (this.redirect) {
            clearTimeout(this.redirect);
        }
        if (!canActivate) {
            if (loggedIn) {
                this.redirect = setTimeout(() => this.router.navigate(['/funnel']));
            } else {
                this.redirect = setTimeout(() => this.router.navigate(['/']));
            }
        }
        return canActivate;
    }

    canActivateChild(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

}
