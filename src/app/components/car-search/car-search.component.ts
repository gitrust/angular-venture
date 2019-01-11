import { Component, OnInit } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { FormControl} from '@angular/forms';
import {
   debounceTime, distinctUntilChanged
 } from 'rxjs/operators';
 


import { Car } from '../../services/car';
import { Logger } from '../../services/logger.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})

export class CarSearchComponent implements OnInit {
  searchPlaceholder: string = "Enter search term";
  searchField: FormControl;
  cars$: Observable<Car[]>;
  count: number;
  
  constructor(
    private carService: CarService, 
    private logger: Logger) {}
  
  ngOnInit(): void {
    
    this.searchField = new FormControl();

	  this.searchField.valueChanges.pipe(
		  debounceTime(400),
		  distinctUntilChanged()
		)
		.subscribe( 
      name => {
        this.logger.log(name);
        this.cars$ = this.carService.searchCars(name);
        this.cars$.subscribe(items => this.count = items.length);
                
      });

      
  }
 
}
