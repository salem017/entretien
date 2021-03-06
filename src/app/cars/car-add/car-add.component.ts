import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import {Car} from '../models/car';
import {CarService} from '../services/car.service';
import {CarAdd} from '../store/car.actions';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  @Input()
  car: Car;

  @Output()
  updateDone = new EventEmitter<Car>();
  angForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder, private carService: CarService, private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.car === undefined){
      this.createForm();
    } else {
      this.updateCar();
    }

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

  updateCar(): void{
    this.angForm = this.fb.group({
      immatriculation: [this.car.immatricution, Validators.required ],
      marque: [this.car.marque, Validators.required ],
      dateAchat: [this.car.dateAchat, Validators.required ],
      couleur: [this.car.couleur, Validators.required ],
      etat: [this.car.etat, Validators.required ],
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
    this.userService.newCarCreated();
    this.router.navigate(['/cars']);
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
    this.updateDone.emit(car);
  }
}
