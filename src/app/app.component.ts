import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import {Car} from './cars/models/car';
import {CarAdd} from './cars/store/car.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title = 'Vente de voitures';
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    let car: Car;
    car = {
      id: 0,
      coefficient: 6,
      couleur: 'Gris nardo',
      etat: 'comme neuf juste un tonneau au niveau de port de bouc',
      immatricution: 'XX-58A-13',
      marque: 'Fiat',
      dateAchat: '01/01/1999'};
    this.store.dispatch(new CarAdd(car));
  }
}
