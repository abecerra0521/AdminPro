import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @Input('name') leyend: string = 'Leyenda';
  @Input() porcentage: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

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

    this.changeValue.emit(this.porcentage);
  }

}
