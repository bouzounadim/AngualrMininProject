import { TechServiceService } from './../services/TechService.service';
/* tslint:disable */
import { Tech } from './../Model/Tech';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User_serviceService } from '../services/user_service.service';
import { Classe } from '../Model/Classe';

@Component({
  selector: 'app-Edit_Student',
  templateUrl: './Edit_Student.component.html',
  styleUrls: ['./Edit_Student.component.css']
})
export class Edit_StudentComponent implements OnInit {

// tslint:disable-next-line: whitespace
// tslint:disable-next-line: typedef-whitespace
sub: any;
id: any;
item: any;
exampleForm: FormGroup;
mat = '';
selectop = '';
cla = '';
public sugg =new Array();
public techi :any[];
public splitted : any[];


public classe: Classe[] = [
  { nomClasse: 'GlSIA'},
  { nomClasse: 'GlSIB'},
  { nomClasse: 'DW'},
];

  constructor(private techservice : TechServiceService,  private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    // tslint:disable-next-line: align
    public Userservice: User_serviceService ) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.id = params.id;
    });


    this.viewDetails(this.id)
    this.techservice.getall().subscribe(result => {
      this.techi = result;
    
      for (let i = 0; i < this.techi.length; i++) {
   
       if(this.techi[i].nomTech === this.splitted[i]){
        console.log(true);
         
      }else{
        this.sugg.push(this.techi[i].nomTech);
          
      }
      
      }
   
    }
      );
  }


 
  createForm() {
    this.exampleForm = this.fb.group({
      nom: [this.item.nom, Validators.required],
      prenom: [this.item.prenom, Validators.required],
      dateNaissance: [this.item.dateNaissance, Validators.required],
      telephone: [this.item.telephone, Validators.required],
      email: [this.item.email, Validators.required],
      classee: [this.cla, Validators.required],
      tech: [this.mat, Validators.required],
    });
  }



  onSubmit(value) {
    this.Userservice.updateUser(this.id, value)
    .then(
      res => {
        this.router.navigate(['home/user']);
      }
    );
  }


  add() {
    const re = this.selectop;
    if (this.mat.search(re) == -1 ) {
        this.mat = this.mat + this.selectop + ' ';
        this.sugg.forEach( (item, index) => {
          if(item === re) this.sugg.splice(index,1);
        });
        
  } else 
  { 
   
    
  }
}

  viewDetails(id) {
  
  this.Userservice.getStudentde(id)
  .subscribe(
    data => {
      this.item = data.payload.data() ;
      console.log(this.item.tech);
      this.mat = this.item.tech;
      this.cla=this.item.classee; 
      console.log("hadha",this.mat);
      this.splitted = this.mat.split(" "); 
      console.log("aaaa",this.splitted);
         this.createForm();
    
   

     } );
  


}



}

