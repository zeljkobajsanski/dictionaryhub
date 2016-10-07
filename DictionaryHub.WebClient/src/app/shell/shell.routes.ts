import { Routes, RouterModule,  } from '@angular/router';

import {ShellComponent} from './shell.component';

import {dictionaryRoutes} from '../dictionary/dictionary.routes';

const routes: Routes = [
    {path: '', component: ShellComponent, children: [...dictionaryRoutes]}
];

export const mainRoutes = RouterModule.forChild(routes);
