import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLogin:boolean;
  
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.isLogin=this.authService.isAuthenticated();
   
    
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      Email: ["", Validators.required],
      Password: ["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value)

      let loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.success("Başarılı Giriş.")
        console.log(response.data)
        localStorage.setItem("token", response.data.token)
        this.router.navigate(['/cars'], {});


      }, responseError => {
        //console.log(responseError)
        this.toastrService.error(responseError.error);
       

      })
    }



    else {
      this.toastrService.error("Formdaki tüm alanları doldurunuz.")
      
    }



  }

 


}