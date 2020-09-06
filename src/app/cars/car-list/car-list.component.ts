import { Component, OnInit } from '@angular/core';
import {Car} from '../models/car';
import {Observable} from 'rxjs';
import {CarService} from '../services/car.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import {getAllCars} from '../store/car.selectors';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars$: Observable<Car[]>;

  constructor(private courseService: CarService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cars$ = this.store.select(getAllCars);
  }


}
