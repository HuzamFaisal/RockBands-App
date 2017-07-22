import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { RockbandsComponent }      from './rockbands.component';
import { RockbandDetailComponent }  from './rockband-detail.component';
import { RockbandService }          from './rockband.service';
import { RockbandSearchComponent }  from './rockband-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    RockbandDetailComponent,
    RockbandsComponent,
    RockbandSearchComponent
  ],
  providers: [ RockbandService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
