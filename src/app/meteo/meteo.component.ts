import { Component, OnInit } from '@angular/core';
import {MeteoService} from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  degres: number;

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
    this.meteoService.getDegres().subscribe(data => {
      this.degres = data.list[0].main.temp;
    });
  }

}
