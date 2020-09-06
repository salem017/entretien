import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarService} from './services/car.service';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {carReducer} from './store/car.reducers';
import {CarEffects} from './store/car.effects';
import {CarListComponent} from './car-list/car-list.component';



@NgModule({
  declarations: [
    CarListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('cars', carReducer),
    EffectsModule.forFeature([CarEffects])
  ],
  providers: [CarService],
  exports: [CarListComponent]
})
export class CarModule { }
