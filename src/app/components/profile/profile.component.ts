import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 //mail:string
 user:User;

  constructor(private authService:AuthService,
    private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
 //this.getUserByMail();
 this.getUserInfo();
  }
   
 
  // getUserByMail(){
  //   if(this.authService.isAuthenticated){
  //     this.userService.getByMail(this.mail).subscribe(response=>{
  //            this.user=[response.data]

  //     })
  //   }
  // }

  getUserInfo(){
    let user=this.authService.getUserInfoByToken();
    this.user=user;
    console.log(this.user)
    
  }
    

}
