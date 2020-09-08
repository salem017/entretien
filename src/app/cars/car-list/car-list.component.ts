import { Component, OnInit } from '@angular/core';
import {Car} from '../models/car';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CarAdd, CarModify, CarRemove} from '../store/car.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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
  constructor(private store: Store<{ cars: Car[] }>,  private fb: FormBuilder, private router: Router) {
    this.cars = store.pipe(select('cars'));
  }
  ngOnInit(): void {
  }
  removeCar(CarIndex): void {
    this.store.dispatch(new CarRemove(CarIndex));
  }


  updateCar(car: Car): void {
    this.isUpdateActivated = true;
    this.updateCarObject = car;
    this.angForm = this.fb.group({
      immatriculation: [car.immatricution, Validators.required ],
      marque: [car.marque, Validators.required ],
      dateAchat: [car.dateAchat, Validators.required ],
      couleur: [car.couleur, Validators.required ],
      etat: [car.etat, Validators.required ],
    });
  }

  updateCarDone(immatriculation$, marque$, dateAchat$, couleur$, etat$, id$): void {
    let car: Car;
    car = {
      couleur: couleur$,
      dateAchat: dateAchat$,
      etat: etat$,
      id: id$,
      immatricution: immatriculation$,
      marque: marque$
    };
    this.store.dispatch(new CarModify(car));
    this.updateCarObject = null;
    this.isUpdateActivated = false;
  }
}
