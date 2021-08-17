import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/Car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'detail-car',
  templateUrl: 'detail-car.component.html',
  styleUrls: ['./detail-car.component.scss']
})

export class DetailCarComponent implements OnInit {

  public car: Car;

  constructor(
    private carService: CarService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() { 
    this._route.params.subscribe(params => {
      this.getCar(Number(params.id));
    });
  }

  private getCar(idCar: number): void {
    this.carService.getCar(idCar).subscribe(car => {
      this.car = car;
    })
  }
}