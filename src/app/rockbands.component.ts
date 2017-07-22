import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Rockband }                from './rockband';
import { RockbandService }         from './rockband.service';

@Component({
  selector: 'my-rockbands',
  templateUrl: './rockbands.component.html',
  styleUrls: [ './rockbands.component.css' ]
})
export class RockbandsComponent implements OnInit {
  rockbands: Rockband[];
  selectedRockband: Rockband;

  constructor(
    private rockbandService: RockbandService,
    private router: Router) { }

  getRockbands(): void {
    this.rockbandService
        .getRockbands()
        .then(rockbands => this.rockbands = rockbands);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.rockbandService.create(name)
      .then(rockband => {
        this.rockbands.push(rockband);
        this.selectedRockband = null;
      });
  }

  delete(rockband: Rockband): void {
    this.rockbandService
        .delete(rockband.id)
        .then(() => {
          this.rockbands = this.rockbands.filter(h => h !== rockband);
          if (this.selectedRockband === rockband) { this.selectedRockband = null; }
        });
  }

  ngOnInit(): void {
    this.getRockbands();
  }

  onSelect(rockband: Rockband): void {
    this.selectedRockband = rockband;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedRockband.id]);
  }
}
