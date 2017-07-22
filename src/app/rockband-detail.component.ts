import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Rockband }        from './rockband';
import { RockbandService } from './rockband.service';

@Component({
  selector: 'rockband-detail',
  templateUrl: './rockband-detail.component.html',
  styleUrls: [ './rockband-detail.component.css' ]
})
export class RockbandDetailComponent implements OnInit {
  rockband: Rockband;

  constructor(
    private rockbandService: RockbandService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.rockbandService.getRockband(+params.get('id')))
      .subscribe(rockband => this.rockband = rockband);
  }

  save(): void {
    this.rockbandService.update(this.rockband)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
