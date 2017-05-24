import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {routing} from './home.routing';
import {COMMON_MODULES} from '../../shared/shared.module';


export const COMPONENTS = [
    HomeComponent
];

@NgModule({
    imports: [
        ...COMMON_MODULES,
        routing
    ],
    declarations: COMPONENTS,
    bootstrap: [],
    exports: COMPONENTS
})
export class HomeModule {
}


