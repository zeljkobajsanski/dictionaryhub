import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent }   from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPageComponent } from './tabs/tab-page.component';

@NgModule({
    imports: [CommonModule],
    exports: [CardComponent, TabsComponent, TabPageComponent],
    declarations: [CardComponent, TabsComponent, TabPageComponent],
    providers: [],
})
export class SharedModule { }
