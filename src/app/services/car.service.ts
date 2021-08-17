import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../models/Car.model';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  constructor() { }

  getCars(): Observable<Array<Car>> {
    let carArray: Array<Car> = [
      {
        id: 1,
        brand: 'Mazda CX-5',
        year: 2021,
        color: 'Blue',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum officia architecto sequi reiciendis adipisci ab expedita minima atque voluptas.',
        urlImg: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg'
      },
      {
        id: 2,
        brand: 'Porsche',
        year: 2018,
        color: 'Gray',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum officia architecto sequi reiciendis adipisci ab expedita minima atque voluptas.',
        urlImg: 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_960_720.png'
      }
    ]

    return of(carArray);
  }
}