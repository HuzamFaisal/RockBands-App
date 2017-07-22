import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Rockband }           from './rockband';

@Injectable()
export class RockbandSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Rockband[]> {
    return this.http
               .get(`api/rockbands/?name=${term}`)
               .map(response => response.json().data as Rockband[]);
  }
}
