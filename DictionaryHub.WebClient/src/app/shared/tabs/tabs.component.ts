import { Component, OnInit } from '@angular/core';

import { TabPageComponent } from './tab-page.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    tabPages: TabPageComponent[] = [];

    constructor() { }

    ngOnInit() {
    }

    addPage(tabPage: TabPageComponent) {
      this.tabPages.push(tabPage);
      if (this.tabPages.length === 1) {
        tabPage.isActive = true;
      }
    }

    selectTab(tabPage: TabPageComponent) {
      this.tabPages.forEach((tab) => tab.isActive = false);
      tabPage.isActive = true;
    }

    clear() {
        this.tabPages = [];
    }

}
