import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { RockbandSearchService } from './rockband-search.service';
import { Rockband } from './rockband';

@Component({
  selector: 'rockband-search',
  templateUrl: './rockband-search.component.html',
  styleUrls: [ './rockband-search.component.css' ],
  providers: [RockbandSearchService]
})
export class RockbandSearchComponent implements OnInit {
  rockbands: Observable<Rockband[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private rockbandSearchService: RockbandSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.rockbands = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.rockbandSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Rockband[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Rockband[]>([]);
      });
  }

  gotoDetail(rockband: Rockband): void {
    let link = ['/detail', rockband.id];
    this.router.navigate(link);
  }
}
