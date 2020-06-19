import { TechServiceService } from './../services/TechService.service';
import { Router } from '@angular/router';
import { User_serviceService } from './../services/user_service.service';
import { Student } from './../Model/Student';
import { Tech } from './../Model/Tech';
import { Component, OnInit, Output } from '@angular/core';
import { Classe } from '../Model/Classe';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})

export class UserComponent implements OnInit {
  // tslint:disable-next-line: typedef-whitespace
  public techi: Tech[] = [
    { nomTech: 'Java'},
    { nomTech: 'Android'},
    { nomTech: 'c++'},
];

 classe: Classe[] = [
  { nomClasse: 'GlSIA'},
  { nomClasse: 'GlSIB'},
  { nomClasse: 'DW'},
];
items: Array<any>;
// tslint:disable-next-line: variable-name
name_filtered_items : Array<any>;
arr : Array<any>;

studentt : Student;
itemss: any;

// tslint:disable-next-line: no-inferrable-types
searchValue: string = "";
selectop: string = "";

@Output() parentMessage : Array<any>;
@Output() parentMessage2 : Array<any>;

  // tslint:disable-next-line: typedef-whitespace
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: whitespace
  constructor(private user_serviceService : User_serviceService , private firestore: AngularFirestore , private router: Router,
    // tslint:disable-next-line: align
    private toastr: ToastrService , private tech:TechServiceService ) { }
  ngOnInit() {
     this.tech.getall().subscribe(result => {
      this.items = result;
      this.parentMessage2=this.items;
      
    });
    
    this.user_serviceService.getStudent().subscribe(result => {
      this.items = result;
      this.parentMessage=this.items;
      console.log(this.parentMessage);
      
    });

}

searchByName(){
  this.user_serviceService.searchUsers(this.searchValue)
  .subscribe(result => {
    this.name_filtered_items = result;
    this.items = this.name_filtered_items;
    console.log(result);
  });


}

searchBy(){
  console.log(this.selectop);
  this.user_serviceService.searchClasse(this.selectop)
  .subscribe(result => {
    this.arr=result;
     console.log(result);
     
    this.items = this.arr;
  });


}




viewDetails(values)
{
  let id=values.payload.doc.id;

  this.router.navigate(['home/details'], { queryParams: { id: id } });

}

go(values){
  let id=values.payload.doc.id;
  this.router.navigate(['home/update'], { queryParams: { id: id } });
}
delete(values){
  this.user_serviceService.deleteUser(values.payload.doc.id)
  .then(
    res => {
      this.toastr.error('Etudiant supprimé!', 'Suppression  ');

      this.router.navigate(['home/user']);
    },
    err => {
      console.log(err);
    }
  );
}

}
