import { Routes, RouterModule,  } from '@angular/router';
import { DictionaryComponent } from './dictionary.component';


const routes: Routes = [
    {path: '', component: DictionaryComponent}
];

export const dictionaryRoutes = RouterModule.forChild(routes);
