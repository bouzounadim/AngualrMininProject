import { Router } from '@angular/router';
import { TechServiceService } from './../services/TechService.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { logWarnings } from 'protractor/built/driverProviders';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Tech',
  templateUrl: './Tech.component.html',
  styleUrls: ['./Tech.component.css']
})
export class TechComponent implements OnInit {
  formTech: FormGroup;



  constructor(private TechService : TechServiceService ,  private formBuilder: FormBuilder ,private route :Router
     , private toast : ToastrService) { }

  ngOnInit() {

    this.formTech = this.formBuilder.group({
      nomTech: ['', Validators.required],
    });

  }


  cretTech(){
    this.TechService.addtech(this.formTech.value).then(()=>{
    this.toast.success("technologies ajouté ");
    this.route.navigate(['home/user']);
    }); 
  
  }


}
