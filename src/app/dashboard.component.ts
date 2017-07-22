import { Component, OnInit } from '@angular/core';

import { Rockband }        from './rockband';
import { RockbandService } from './rockband.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  rockbands: Rockband[] = [];

  constructor(private rockbandService: RockbandService) { }

  ngOnInit(): void {
    this.rockbandService.getRockbands()
      .then(rockbands => this.rockbands = rockbands.slice(1, 4));
  }
}
