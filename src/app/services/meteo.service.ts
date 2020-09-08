import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  getDegres(): Observable<any> {
    return this.http.get<any>
    ('/data/2.5/find?q=London&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02');
  }
}
