import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';
import {AppState} from '../../store/reducers';
import {loadCars} from './car.actions';
import {areCarsLoaded} from './car.selectors';

@Injectable()
export class CarResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        select(areCarsLoaded),
        tap((carsLoaded) => {
          if (!carsLoaded) {
            this.store.dispatch(loadCars());
          }

        }),
        first()
      );
  }
}
