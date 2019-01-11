import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Logger } from './logger.service';
import { Car } from './car';
import { Observable, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private http: HttpClient,
    private logger: Logger) { }


  public searchCars(name: string): Observable<Car[]> {
    this.logger.log("Search cars by name " + name);
    
    const url = "http://localhost:5000/v1/cars";
    let httpHeaders = new HttpHeaders()
      .set('User-Agent', 'angular venture app v0.1')
      .set('Accept', 'application/json')
      .set('Authorization', "Basic " + btoa("user1:pass"));
    let httpParams = new HttpParams()
      .set('term', name)
      .set('size', "50");

    if (name == "" || name.length < 2) {
      return EMPTY;
    }

    let response: Observable<any> = this.http.get(url, { headers: httpHeaders, params: httpParams, responseType: "json", withCredentials: true });
    return response.pipe(map(data => {

      response.subscribe(v => {
        //this.logger.log("RESP: " + JSON.stringify(v));
      });
      let cars: Car[] = new Array();

      data.forEach(element => {
        //this.logger.log("ELEMENT: " + JSON.stringify(element));
        let car: Car = this.extractCar(element);
        cars.push(car);
      });

      return cars;
    }));
  }

  private extractCar(element: any): Car {
    let car: Car = new Car();
    car.name = element["Name"];
    car.acceleration = element["Acceleration"];
    car.cylinders = element["Cylinders"];
    car.displacement = element["Displacement"];
    car.horsepower = element["Horsepower"];
    car.origin = element["Origin"];
    car.year = element["Year"];
    car.weight = element["Weight_in_lbs"];
    return car;
  }
}