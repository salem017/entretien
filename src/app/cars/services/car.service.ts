import { Injectable } from '@angular/core';
import {Car} from '../models/car';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  get idLast(): number {
    this._idLast ++;
    return this._idLast;
  }

  set idLast(value: number) {
    this._idLast = value;
  }

  private _idLast = 0;

  constructor(httpClient: HttpClient) {
  }

}
