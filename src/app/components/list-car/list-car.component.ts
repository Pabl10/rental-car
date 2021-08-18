import { Component, Input, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from '../../models/Car.model';

@Component({
  selector: 'list-car',
  templateUrl: 'list-car.component.html'
})

export class ListCarComponent implements OnInit {

  public listCars: Array<Car> = [];

  @Input() public txtCar: string;

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() { 
    this.getCars();
  }

  /**
   * @description method that allows to obtain the cars
   */
  private getCars(): void {
    this.carService.getCars().subscribe(cars => {
      this.listCars = cars;
    });
  }

  public sortBy(prop: string): Array<Car> {
    return this.listCars.sort((a: any, b: any) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);

  }
}