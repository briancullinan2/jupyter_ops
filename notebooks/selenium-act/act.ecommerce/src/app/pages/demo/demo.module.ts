import {NgModule} from '@angular/core';
import {DemoComponent} from './demo.component';
import {routing} from './demo.routing';
import {COMMON_MODULES} from '../../shared/shared.module';

export const COMPONENTS = [
    DemoComponent
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
export class DemoModule {
}


