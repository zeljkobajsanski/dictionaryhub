import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {SearchResult} from './search-result';
import {baseUrl} from '../base-url';

@Injectable()
export class DictionaryService {

  constructor(private http: Http, @Inject(baseUrl) private baseUrl: string) { }

  findWord(word: string) : Observable<SearchResult[]> {
     return this.http.get(`${this.baseUrl}/FindWord?word=${word}`)
                     .map(r => r.json());
  }

}
