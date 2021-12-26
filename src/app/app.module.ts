import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{FormsModule,ReactiveFormsModule} from "@angular/forms";
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"; 
import { DatePipe } from '@angular/common';


import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { FiltercolorPipe } from './pipes/filtercolor.pipe';
import { FilterbrandPipe } from './pipes/filterbrand.pipe';

import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    
    BrandComponent,
    CustomerComponent,
    ColorComponent,
    NaviComponent,
    RentalComponent,
    CarDetailComponent,
    CarComponent,
    CarImageComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    LeftMenuComponent,
    FiltercolorPipe,
    FilterbrandPipe,
  
    PaymentComponent,
       CarAddComponent,
       ColorAddComponent,
       BrandAddComponent,
       BrandUpdateComponent,
       CarUpdateComponent,
       LoginComponent,
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:DatePipe}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
