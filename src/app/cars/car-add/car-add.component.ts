import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {Car} from '../models/car';
import {CarService} from '../services/car.service';
import {CarAdd} from '../store/car.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder, private carService: CarService, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void{
    this.angForm = this.fb.group({
      immatriculation: ['', Validators.required ],
      marque: ['', Validators.required ],
      dateAchat: ['', Validators.required ],
      couleur: ['', Validators.required ],
      etat: ['', Validators.required ],
    });
  }

  addCar(immatriculation$, marque$, dateAchat$, couleur$, etat$): void {
    let car: Car;
    car = {
      couleur: couleur$,
      dateAchat: dateAchat$,
      etat: etat$,
      id: this.carService.idLast,
      immatricution: immatriculation$,
      marque: marque$
    };
    this.store.dispatch(new CarAdd(car));
    this.router.navigate(['/cars']);
    }
}
