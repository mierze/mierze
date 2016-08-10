import { Component } from '@angular/core';
import { About, Blog, DiscGolf, Landing, Portfolio, Volleyball, Explore, Shoes } from './pages/index';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [About, Blog, DiscGolf, Landing, Portfolio, Volleyball, Explore, Shoes]
})
export class App { }
