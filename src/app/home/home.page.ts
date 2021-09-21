import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  inputs: any[];
  constructor() {
    this.inputs = Array(8).fill(1);
  }
}
