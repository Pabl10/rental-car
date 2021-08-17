import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCarComponent } from './pages/detail-car/detail-car.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "car/:id", component: DetailCarComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
