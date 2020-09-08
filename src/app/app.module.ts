import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CarAddComponent } from './cars/car-add/car-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CarService} from './cars/services/car.service';
import {UserService} from './services/user.service';
import { CarReducer} from './cars/store/car.reducers';

const routes = [
  {
    path: 'cars',
    component: CarListComponent,
  },
  // {path: 'create-car', component: CreateCarComponent},
  {path: '**', redirectTo: 'cars'}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CarAddComponent,
    CarListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({cars: CarReducer}),
  ],
  providers: [CarService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
