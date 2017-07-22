import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
  <div class="rockband-list-container">
  
  <h1>ROCK BANDS</h1>

  <br>

<ul class="nav nav-tabs">
   <li class="nav-item">
    <a class="nav-link active" href="/dashboard">Dashboard</a>
   </li>
   <li class="nav-item">
    <a class="nav-link active" href="/rockbands">Rockbands</a>
   </li>
</ul>

    <router-outlet></router-outlet>

  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock Bands';
}
