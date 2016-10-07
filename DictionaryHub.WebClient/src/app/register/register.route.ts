import { Routes, RouterModule,  } from '@angular/router';

import { RegisterComponent } from './register.component';


const routes: Routes = [
    {path: 'register', component: RegisterComponent}
];

export const registerRoutes = RouterModule.forChild(routes);
