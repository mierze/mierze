import {Component} from '@angular/core';
import {Projects} from './projects';
import {Experience} from './experience';

@Component({
  selector: 'portfolio',
  templateUrl: 'app/pages/portfolio/portfolio.html',
  directives: [Projects, Experience]
})
export class Portfolio {
  constructor() {

  }
}
