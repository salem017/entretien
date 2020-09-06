import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';
import {RouterModule} from '@angular/router';
import {CarResolver} from './cars/store/car.resolver';
import {CarModule} from './cars/car.module';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

const routes = [
  {
    path: 'cars',
    component: CarListComponent,
    resolve: {
      cars: CarResolver
    }
  },
  // {path: 'create-car', component: CreateCarComponent},
  {path: '**', redirectTo: 'cars'}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    CarModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [CarResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
