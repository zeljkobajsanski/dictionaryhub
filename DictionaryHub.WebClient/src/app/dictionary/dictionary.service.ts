import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {SearchResult} from './search-result';

@Injectable()
export class DictionaryService {

  constructor(private http: Http) { }

  findWord(word: string) : Observable<SearchResult[]> {
     return this.http.get(`http://localhost:64989/Home/FindWord?word=${word}`)
                     .map(r => r.json());
  }

}
