import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCarComponent } from './components/list-car/list-car.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterCarPipe } from './components/pipes/car.pipe';
import { DetailCarComponent } from './pages/detail-car/detail-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarComponent,
    NavbarComponent,
    CarouselComponent,
    ListCarComponent,
    FilterCarPipe,
    DetailCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
