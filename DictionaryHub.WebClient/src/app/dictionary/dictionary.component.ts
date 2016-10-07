import { Component, OnInit, ViewChild } from '@angular/core';

import { SearchResult } from './search-result';
import { DictionaryService } from './dictionary.service'; 
import { TabsComponent } from '../shared/index';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  @ViewChild("tabs") tab: TabsComponent;
  results: SearchResult[] = [];
  isBusy = false;

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    
  }

  search(word: string) {
    this.isBusy = true;
    this.dictionaryService.findWord(word).subscribe(
        results => {
          this.tab.clear();
          this.results = results;
          this.isBusy = false;
        }
    )
  }

}
