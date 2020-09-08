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
    this.angForm = this.fb.group({
      immatriculation: ['', Validators.required ],
      marque: ['', Validators.required ],
      dateAchat: ['', Validators.required ],
      couleur: ['', Validators.required ],
      etat: ['', Validators.required ],
    });
  }
  removeCar(CarIndex): void {
    this.store.dispatch(new CarRemove(CarIndex));
  }


  updateCar(car: Car): void {
    this.isUpdateActivated = true;
    this.updateCarObject = car;
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
    this.router.navigate(['/cars']);
  }
}
