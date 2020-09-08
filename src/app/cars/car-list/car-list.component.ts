import { Component, OnInit } from '@angular/core';
import {Car} from '../models/car';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {CarRemove} from '../store/car.actions';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Observable<Car[]>;
  constructor(private store: Store<{ cars: Car[] }>) {
    this.cars = store.pipe(select('cars'));
  }
  ngOnInit(): void {
  }
  removeCar(CarIndex): void {
    this.store.dispatch(new CarRemove(CarIndex));
  }



}
