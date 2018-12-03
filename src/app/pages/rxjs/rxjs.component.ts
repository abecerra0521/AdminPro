import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.observable().subscribe(
      num =>  console.log('subscribe', num),
      error => console.error('Error en el observable', error),
      () => console.log('Termino !!')
    );

  }

  ngOnInit() {
  }

  observable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {

      let cont = 0;

      let interval = setInterval(() => {
        cont ++;

        let salida = {
          valor: cont
        };

        observer.next( salida );
        if (cont === 3) {
          clearInterval(interval);
          observer.complete();
        }
        // if (cont === 2) {
          // clearInterval(interval);
          // observer.error('help');
        // }
      }, 1000);
    }).pipe(
      map( response => response.valor)
    );
  }

}
