import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../models/Car.model';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  private carArray: Array<Car> = [
    {
      id: 1,
      brand: 'Mazda CX-5',
      year: 2021,
      color: 'Blue',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum officia architecto sequi reiciendis adipisci ab expedita minima atque voluptas.',
      urlImg: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/car-1880381_960_720.jpg'
    },
    {
      id: 2,
      brand: 'Audi',
      year: 2018,
      color: 'Gray',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum officia architecto sequi reiciendis adipisci ab expedita minima atque voluptas.',
      urlImg: 'https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg'
    },
    {
      id: 3,
      brand: 'Mercedez',
      year: 2018,
      color: 'Gray',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum officia architecto sequi reiciendis adipisci ab expedita minima atque voluptas.',
      urlImg: 'https://cdn.pixabay.com/photo/2016/09/06/13/37/maserati-gran-turismo-1649119_960_720.jpg'
    },
    {
      id: 4,
      brand: 'Chevrolet',
      year: 2016,
      color: 'Gray',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum officia architecto sequi reiciendis adipisci ab expedita minima atque voluptas.',
      urlImg: 'https://cdn.pixabay.com/photo/2016/09/15/12/12/renault-clio-1671405_960_720.jpg'
    }
  ];


  constructor() { }

  public getCars(): Observable<Array<Car>> {
    // return this.http.get(environment.apiBaseUrl, {params: params});
    return of(this.carArray);
  }

  public getCar(idCar: number): Observable<Car> {
    let car: Car = this.carArray.find(car => car.id === idCar) || new Car();
    return of(car);
  }
}