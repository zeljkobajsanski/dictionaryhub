import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/index';
import { LoginComponent } from './login.component';
import { loginRoutes } from './login.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    loginRoutes
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
