import { Component, OnInit } from '@angular/core';

import { LoginModel } from '../models/loginModel';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

import {  ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ThrowStmt } from '@angular/compiler';
import { LocalStorageService } from '../services/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  
  //user:User=this.authService.getUser()
  user:User;

  constructor(
    
    private authService: AuthService
    
  ) {}

 

  ngOnInit(): void {
  
   this.getUserInfo();
  }
   

  isAuthenticated(){
  
    return this.authService.isAuthenticated();
  }

  logout(){
  
    this.authService.logout();
  }

  getUserInfo(){
    let user=this.authService.getUserInfoByToken();
    this.user=user;
    console.log(this.user)
    
  }

}