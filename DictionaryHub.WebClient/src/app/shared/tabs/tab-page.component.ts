import { Component, OnInit, Input } from '@angular/core';

import { TabsComponent } from './tabs.component';

@Component({
    selector: 'tab-page',
    template: `<div role="tabpanel" class="tab-pane" [ngClass]="{active: isActive, in: isActive}" *ngIf="isActive"><ng-content></ng-content></div>`
})
export class TabPageComponent implements OnInit {
    
    @Input() isActive: boolean = false;
    @Input() title: string;

    constructor(private tabContainer: TabsComponent) {
        tabContainer.addPage(this);
     }

    ngOnInit() { }
}