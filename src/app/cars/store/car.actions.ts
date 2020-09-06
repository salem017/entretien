import {Car} from '../models/car';
import {Update} from '@ngrx/entity';
import {createAction, props} from '@ngrx/store';


export const loadCars = createAction(
  '[Cars List] Load Cars via Service',
);

export const carsLoaded = createAction(
  '[Cars effects] Cars Loaded Successfully',
  props<{cars: Car[]}>()
);

export const createCar = createAction(
  '[Create Car Component] Create Car',
  props<{car: Car}>()
);

export const deleteCar = createAction(
  '[Car Operations] Delete Car',
  props<{carId: string}>()
);

export const updateCar = createAction(
  '[Car Operation ] Update Car',
  props<{update: Update<Car>}>()
);

export const carActionTypes = {
  loadCars,
  carsLoaded,
  createCar,
  deleteCar,
  updateCar
};
