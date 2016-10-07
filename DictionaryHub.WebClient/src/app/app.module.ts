import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Modules
import { WebClientRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/index';
import { RegisterModule } from './register/register.module';
import { ShellModule } from './shell/shell.module';

import {baseUrl} from './base-url';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    WebClientRoutingModule,
    LoginModule,
    RegisterModule,
    SharedModule,
    ShellModule
  ],
  providers: [{provide: baseUrl, useValue: 'http://localhost:64989/Home'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
