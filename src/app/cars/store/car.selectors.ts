
import { CarState } from './car.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './car.reducers';

export const carFeatureSelector = createFeatureSelector<CarState>('cars');

export const getAllCars = createSelector(
  carFeatureSelector,
  selectAll
);

export const areCarsLoaded = createSelector(
  carFeatureSelector,
  state => state.carsLoaded
);
