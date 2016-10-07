import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DictionaryComponent } from './dictionary.component';

import { DictionaryService } from './dictionary.service';
import { dictionaryRoutes } from './dictionary.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    dictionaryRoutes,
    SharedModule
  ],
  declarations: [DictionaryComponent],
  exports: [DictionaryComponent],
  providers: [DictionaryService]
})
export class DictionaryModule { }
