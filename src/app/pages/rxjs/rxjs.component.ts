import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription  = this.observable().subscribe(
      num =>  console.log('subscribe', num),
      error => console.error('Error en el observable', error),
      () => console.log('Termino !!')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

        // if (cont === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }
        // if (cont === 2) {
          // clearInterval(interval);
          // observer.error('help');
        // }

      }, 1000);
    }).pipe(
      map( response => response.valor),
      filter((valor, index) => {
        if ((valor % 2 ) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

}
