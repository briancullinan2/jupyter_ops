import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, RoutesRecognized} from '@angular/router';
import {SubscriptionsComponent} from '../../subscriptions/subscriptions.component';

/**
 * If the link we are navigating to exists as a funnel page, convert it to funnel route
 * E.g. /account/login always converts to /buy/login
 * So we don't have to have two versions of the link laying around everywhere
 */
@Injectable()
export class FunnelGuard implements CanDeactivate<SubscriptionsComponent> {
    private allowLeave = true;

    constructor(public router: Router) {
        this.router.events
            .filter((e: any) => e instanceof RoutesRecognized)
            .pairwise()
            .subscribe(() => {
                this.allowLeave = false;
            });
    }

    canDeactivate(component: SubscriptionsComponent,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState: RouterStateSnapshot): Promise<boolean> {
        this.allowLeave = true;
        const buyLink = '/buy/account/' + nextState.url.split('/').slice(2).join('/');
        return new Promise((res, rej) => {
            if (nextState.url.indexOf('/buy') === -1 && buyLink !== '/buy/' && buyLink !== '/buy/account/') {
                this.router.navigate([buyLink]).then(() => {
                    res(this.allowLeave);
                }).catch((e) => {
                    res(true);
                });
            }
            res(true);
        });
    }
}
