
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {carActionTypes} from './car.actions';
import {CarService} from '../services/car.service';

@Injectable()
export class CarEffects {

  loadCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(carActionTypes.loadCars),
      concatMap(() => this.carService.getAllCars()),
      map(cars => carActionTypes.carsLoaded({cars}))
    )
  );

  createCar$ = createEffect(() =>
      this.actions$.pipe(
        ofType(carActionTypes.createCar),
        concatMap((action) => this.carService.createCar(action.car)),
        tap(() => this.router.navigateByUrl('/cars'))
      ),
    {dispatch: false}
  );

  deleteCar$ = createEffect(() =>
      this.actions$.pipe(
        ofType(carActionTypes.deleteCar),
        concatMap((action) => this.carService.deleteCar(action.carId))
      ),
    {dispatch: false}
  );

  updateCar$ = createEffect(() =>
      this.actions$.pipe(
        ofType(carActionTypes.updateCar),
        concatMap((action) => this.carService.updateCar(action.update.id, action.update.changes))
      ),
    {dispatch: false}
  );

  constructor(private carService: CarService, private actions$: Actions, private router: Router) {}
}
