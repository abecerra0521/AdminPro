import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  leyend: string = 'Leyenda';
  porcentage: number = 50;

  constructor() { }

  ngOnInit() {
  }

  changevalue (value) {
    if (this.porcentage >= 100 && value >= 0  ) {
      this.porcentage = 100;
      return;
    } else if (this.porcentage <= 0 && value <= 0 ) {
      return;
    }
    this.porcentage += value;
  }

}
