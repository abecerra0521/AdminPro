import { Component, OnInit } from '@angular/core';
import { reject } from 'q';
import { PAGES_ROUTES } from '../pages.routes';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.contador().then(
      data => console.log(data)
      )
      .catch(error => console.error(error)
      );
  }

  ngOnInit() {
  }

  contador(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      let cont = 0;

      let interval = setInterval(() => {
        cont += 1;
        console.log(cont);
        if (cont === 3) {
          resolve( true );
          // reject(false);
          clearInterval(interval);
        }
      }, 1000);
    });

  }

}
