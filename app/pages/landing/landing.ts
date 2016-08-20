import {Component} from '@angular/core';


@Component({
  selector: 'landing',
  templateUrl: 'app/pages/landing/landing.html'
})
export class Landing {
  close: boolean = true;
  constructor() {}

  toggleClose() {
    this.close = this.close ? false : true;
  }
}
