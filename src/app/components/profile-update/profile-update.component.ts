import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';
import jwtDecode from 'jwt-decode';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  UserUpDateForm:FormGroup
 user:User;
 userId:number
  constructor(private formBuilder:FormBuilder,private userService:UserService,
    private toastrService:ToastrService,private localStorage:LocalStorageService,
    private router:Router,private authService:AuthService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{
       this.userId=params['userId'];
     })
    
    this.createProfileUpDateForm();

  }


  createProfileUpDateForm() {
    this.UserUpDateForm = this.formBuilder.group({
     
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      mail: ["", Validators.required],
      password:["",Validators.required]
      
     
    })
  }

  upDateUser() {
   
    if (this.UserUpDateForm.valid) {
      let userModel:User = Object.assign({},this.UserUpDateForm.value)
      userModel.userId=this.userId
    
      this.userService.upDateUser(userModel).subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
        this.authService.logout();
        this.router.navigate(["/login"])    
      }, responseError=>{
        this.toastrService.error("güncellenmedi")
        console.log(responseError)
      })
      
    }
    else{
      this.toastrService.error("Form eksik","dikkat!")
    }
  }


  getUserByMail(){
    this.userService.getByMail(this.userService.mail).subscribe(response=>{
      this.user=response.data
      this.UserUpDateForm.controls['firstName'].setValue(this.user.firstName);
      this.UserUpDateForm.controls['lastName'].setValue(this.user.lastName);
      this.UserUpDateForm.controls['mail'].setValue(this.user.mail);

    } ,(responseError)=>{
      this.toastrService.error("Başarısız işlem");
    })
  }

}
