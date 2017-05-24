import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './404/not-found';
import {ModuleWithProviders} from '@angular/core';


const routes: Routes = [
    {
        path: '**',
        component: NotFoundComponent
    },

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);




