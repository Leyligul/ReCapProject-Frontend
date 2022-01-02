import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      Email: ["", Validators.required],
      Password: ["", Validators.required],
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required]
    })
  }


  register() {
    if (this.registerForm.valid) {
      //console.log(this.loginForm.value)

      let registerModel = Object.assign({}, this.registerForm.value)
      this.authService.register(registerModel).subscribe(response => {
        this.toastrService.success(response.message)
        //console.log(data)})
        localStorage.setItem("token", response.data.token)


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
