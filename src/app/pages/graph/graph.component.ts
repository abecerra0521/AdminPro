import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styles: []
})
export class GraphComponent implements OnInit {

  graficos = [
    {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    {
      'labels': ['Si', 'No'],
      'data':  [50, 50],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    {
      'labels': ['No', 'Si'],
      'data':  [65, 35],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
