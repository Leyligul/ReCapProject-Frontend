import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private toastrtService:ToastrService,
    private paymentService:PaymentService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  
   

  }


  Pay(){
    if(this.paymentService.pay().subscribe()){
     this.toastrtService.success("Ödemeniz Yapıldı!")
    }else{
      this.toastrtService.error("İlgili alanları doldurunuz.")
    }
  }
  
}
