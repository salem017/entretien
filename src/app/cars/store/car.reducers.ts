
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { carActionTypes, carsLoaded } from './car.actions';
import {Car} from '../models/car';

export interface CarState extends EntityState<Car> {
  carsLoaded: boolean;
}

export const adapter: EntityAdapter<Car> = createEntityAdapter<Car>();

export const initialState = adapter.getInitialState({
  carsLoaded: false
});

export const carReducer = createReducer(
  initialState,

  on(carActionTypes.carsLoaded, (state, action) => {
    return adapter.setAll(
      action.cars,
      {...state, carsLoaded: true}
    );
  }),

  on(carActionTypes.createCar, (state, action) => {
    return adapter.addOne(action.car, state);
  }),

  on(carActionTypes.deleteCar, (state, action) => {
    return adapter.removeOne(action.carId, state);
  }),

  on(carActionTypes.updateCar, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
