import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrialComponent} from './trial.component';


export const trialRoutes: Routes = [
    {
        path: '',
        component: TrialComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(trialRoutes);

