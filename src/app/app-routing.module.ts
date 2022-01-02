import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';

import { BrandComponent } from './components/brand/brand.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';

import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorComponent } from './components/color/color.component';
import { LoginComponent } from './components/login/login.component';

import { PaymentComponent } from './components/payment/payment.component';
import { ProfileUpdateComponent } from './components/profile-update/profile-update.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';



import { RentalComponent } from './components/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full",component:CarComponent},
 
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cardetails/car/:carId",component:CarDetailComponent},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"payments/:carId",component:PaymentComponent},
  {path:"cardetails/car/:colorId/:brandId",component:CarComponent},
  {path:"rentals/:carId",component:RentalComponent},
  {path:"cars/add" , component:CarAddComponent , canActivate:[LoginGuard]},
  {path:"colors/add" , component:ColorAddComponent},
  {path:"brands/add" , component:BrandAddComponent},
  {path:"cars/update/:carId" , component:CarUpdateComponent},
 // {path:"rentals/add" , component:RentalComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"cars",component:CarComponent},
  {path:"profile",component:ProfileComponent},
  {path:"updateProfile/:userId",component:ProfileUpdateComponent},
  

  

 
 

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
