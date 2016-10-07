import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { WebClientRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarComponent} from './sidebar.component';
import { DictionaryModule } from './dictionary/dictionary.module';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, NavbarComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    WebClientRoutingModule,
    DictionaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
