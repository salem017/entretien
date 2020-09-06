import { Injectable } from '@angular/core';
import {Car} from '../models/car';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCars(): Observable<Car[]> {
    const car: Car = {
      id: Math.random(),
      coefficient: 6,
      couleur: 'Gris nardo',
      etat: 'comme neuf juste un tonneau au niveau de port de bouc',
      immatricution: 'XX-58A-13',
      marque: 'Fiat',
      dateAchat: '01/01/1999'};
    return of([car]);
  }

  createCar(car: Car): Observable<Car> {
    return this.http.post<Car>('/api/Cars', car);
  }

  deleteCar(CarId: string): Observable<any> {
    return this.http.delete('/api/Cars/' + CarId);
  }

  updateCar(CarId: string | number, changes: Partial<Car>): Observable<any> {
    return this.http.put('/api/Cars/' + CarId, changes);
  }
}
