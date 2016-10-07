import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared/shared.module';
import { DictionaryModule } from '../dictionary/dictionary.module';

// Components
import { ShellComponent } from './shell.component';
import {SidebarComponent} from './sidebar.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { mainRoutes } from './shell.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    DictionaryModule,
    mainRoutes
  ],
  declarations: [ShellComponent, SidebarComponent, NavbarComponent, FooterComponent]
})
export class ShellModule { }
