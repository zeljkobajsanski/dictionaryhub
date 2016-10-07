import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SharedModule } from '../shared/index';
import { RegisterComponent } from './register.component';
import { registerRoutes } from './register.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    registerRoutes
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
