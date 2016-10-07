import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent }   from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPageComponent } from './tabs/tab-page.component';
import { CopryrightComponent } from './copyright/copyright.component';

@NgModule({
    imports: [CommonModule],
    exports: [CardComponent, TabsComponent, TabPageComponent, CopryrightComponent],
    declarations: [CardComponent, TabsComponent, TabPageComponent, CopryrightComponent],
    providers: [],
})
export class SharedModule { }
