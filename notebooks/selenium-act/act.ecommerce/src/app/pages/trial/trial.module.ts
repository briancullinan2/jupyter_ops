import {NgModule} from '@angular/core';
import {TrialComponent} from './trial.component';
import {routing} from './trial.routing';
import {COMMON_MODULES} from '../../shared/shared.module';

export const COMPONENTS = [
    TrialComponent
];

@NgModule({
    imports: [
        ...COMMON_MODULES,
        routing
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class TrialModule {
}


