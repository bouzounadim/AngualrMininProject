import { Router } from '@angular/router';
import { User_serviceService } from './../services/user_service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeC',
  templateUrl: './homeC.component.html',
  styleUrls: ['./homeC.component.css']
})
export class HomeCComponent implements OnInit {
user:any;
  constructor(private userser:User_serviceService , private route :Router) { }

  ngOnInit() {
    this.user=this.userser.isUserLoggedIn();
    console.log(this.user);
    

  }

  logout(){
    this.userser.logout();
    this.route.navigate(['login']);
  }

}
