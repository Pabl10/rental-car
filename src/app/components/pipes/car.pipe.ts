import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/Car.model';

@Pipe({
  name: 'filterCar',
})
export class FilterCarPipe implements PipeTransform {
  transform(items: Car[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter((car: any) => car.brand.toLowerCase().indexOf(filter) !== -1);
  }
}
