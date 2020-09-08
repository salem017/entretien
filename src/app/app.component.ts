import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import {Car} from './cars/models/car';
import {CarAdd} from './cars/store/car.actions';
import {User} from './models/user';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  title = 'Vente de voitures';
  constructor(private store: Store<AppState>, private userService: UserService) {}
  user: User;

  ngOnInit(): void {
    this.user = this.userService.user;
    let car: Car;
    car = {
      id: 0,
      couleur: 'Gris nardo',
      etat: 'comme neuf',
      immatricution: 'XX-58A-13',
      marque: 'Fiat',
      dateAchat: '2020-09-18'};
    this.store.dispatch(new CarAdd(car));
  }
}
