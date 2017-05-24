import {NgModule} from '@angular/core';

import {ContactComponent} from './contact.component';

import {routing} from './contact.routing';
import {COMMON_MODULES} from '../../shared/shared.module';



export const COMPONENTS = [
    ContactComponent
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
export class ContactModule {
}


