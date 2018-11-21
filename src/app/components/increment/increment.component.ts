import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtPorcentage') txtPorcentage: ElementRef;

  @Input('name') leyend: string = 'Leyenda';
  @Input() porcentage: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onchange( event) {
    if (event >= 100) {
      this.porcentage = 100;
    } else if (event <= 0) {
      this.porcentage = 0;
    } else {
      this.porcentage = event;
    }

    this.txtPorcentage.nativeElement.value = this.porcentage;

    this.changeValue.emit(this.porcentage);
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
    this.txtPorcentage.nativeElement.focus();
  }

}
