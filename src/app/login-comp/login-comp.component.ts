import { User_serviceService } from './../services/user_service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  userDetails: any;
  responseMessage: string = '';
  responseMessageType: string = '';

  constructor(private route : Router ,  private authService : User_serviceService) { }

  ngOnInit(): void {
    if(this.userDetails !=null){
      this.route.navigate(['home/user']);
    }
  }



googleLogin() {
  this.authService.LoginWithGamil()
    .then(res => {
      console.log(res);
       this.route.navigate(['home/user']) .then(() => {
        window.location.reload();
      });;

      this.isUserLoggedIn();
    }, err => {
      this.showMessage("danger", err.message);
    });
}



facelogin() {
  this.authService.LoginWithFacebook()
    .then(res => {
      console.log(res);
       this.route.navigate(['home/user']) .then(() => {
        window.location.reload();
      });;

      this.isUserLoggedIn();
    }, err => {
      this.showMessage("danger", err.message);
    });
}

showMessage(type, msg) {
  this.responseMessageType = type;
  this.responseMessage = msg;
  setTimeout(() => {
    this.responseMessage = "";
  }, 2000);
}

isUserLoggedIn() {
  this.userDetails = this.authService.isUserLoggedIn();
}


}