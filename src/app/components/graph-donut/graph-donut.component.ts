import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-graph-donut',
  templateUrl: './graph-donut.component.html',
  styles: []
})
export class GraphDonutComponent implements OnInit {

  @Input() public doughnutChartLabels: string[] = [];
  @Input() public doughnutChartData: number[] = [];
  @Input() public doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
