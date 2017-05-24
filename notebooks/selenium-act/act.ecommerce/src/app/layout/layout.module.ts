import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {ToolbarComponent} from './toolbar/toolbar';
import {SupportMenuComponent} from './support/support';
import {AccountLinksComponent} from './account-links/account-links';
import {LanguageMenuComponent} from './language/language';
import {FooterComponent} from './footer/footer';
import {MenuComponent} from './menu/menu';
import {COMMON_MODULES} from '../shared/shared.module';
import {NotFoundComponent} from './404/not-found';

export const COMPONENTS = [
    LayoutComponent,
    ToolbarComponent,
    FooterComponent,
    SupportMenuComponent,
    LanguageMenuComponent,
    AccountLinksComponent,
    MenuComponent,
    NotFoundComponent
];

@NgModule({
    imports: [
        ...COMMON_MODULES
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class LayoutModule {
}


