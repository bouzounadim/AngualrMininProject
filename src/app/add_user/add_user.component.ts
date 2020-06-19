import { Tech } from './../Model/Tech';
import { User_serviceService } from './../services/user_service.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Classe } from '../Model/Classe';
import { ToastrService } from 'ngx-toastr';
import { TechServiceService } from '../services/TechService.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-add_user',
  templateUrl: './add_user.component.html',
  styleUrls: ['./add_user.component.css']
})
// tslint:disable-next-line: class-name
export class Add_userComponent implements OnInit {
  // tslint:disable-next-line: no-trailing-whitespace
  
  exampleForm: FormGroup;
  selectop: string = "";
  mat: string = "";

  // tslint:disable-next-line: whitespace
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: max-line-length
  constructor( private techservice : TechServiceService, private formBuilder: FormBuilder, private router: Router , public Userservice: User_serviceService, private toastr: ToastrService) { }
  addForm: FormGroup;
  
  public techi: any;


public classe: Classe[] = [
  { nomClasse: 'GlsiA'},
  { nomClasse: 'GlsiB'},
  { nomClasse: 'DW'},
];




  ngOnInit() {
     
    this.techservice.getall().subscribe(result => {
      this.techi = result;
      
    });
    
    this.addForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      classee: ['', Validators.required],
      tech: [this.mat, Validators.required],
    });


  }

    create()
    {
      this.Userservice.createStudent(this.addForm.value).then(res => {
        this.toastr.success('Creation est terminé!', 'AJouter Etudiant ');
        this.addForm.reset();
        this.router.navigate(['home/user']);

      });
    }


    add(){
      let re = this.selectop;
      console.log(this.selectop);
      
      if (this.mat.search(re) == -1 )
        { 
          this.mat= this.mat + this.selectop + ' ';
          // tslint:disable-next-line: no-trailing-whitespace
} else { 
   // tslint:disable-next-line: no-trailing-whitespace
  }
    }

}
