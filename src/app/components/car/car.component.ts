import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car.model';

@Component({
  selector: 'car',
  templateUrl: 'car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit {

  @Input() public car: Car;


  constructor() { }

  ngOnInit() { 
    console.log('CAR');
    console.log(this.car);
  }
}