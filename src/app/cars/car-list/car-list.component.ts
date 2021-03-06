import { Component, OnInit } from '@angular/core';
import {Car} from '../models/car';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CarAdd, CarModify, CarRemove} from '../store/car.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Observable<Car[]>;
  angForm: FormGroup;
  isUpdateActivated = false;
  updateCarObject: Car;
  constructor(private store: Store<{ cars: Car[] }>,  private fb: FormBuilder, private userService: UserService) {
    this.cars = store.pipe(select('cars'));
  }
  ngOnInit(): void {
  }
  removeCar(CarIndex): void {
    this.store.dispatch(new CarRemove(CarIndex));
    this.userService.deleteCarCreated();
  }


  updateCar(car: Car): void {
    this.isUpdateActivated = true;
    this.updateCarObject = car;
  }

  updateCarDone(car: Car): void {
    this.store.dispatch(new CarModify(car));
    this.updateCarObject = null;
    this.isUpdateActivated = false;
  }
}
