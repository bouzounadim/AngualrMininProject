import { Student } from './../Model/Student';
import { Component, OnInit } from '@angular/core';
import { User_serviceService } from '../services/user_service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Student-deatile',
  templateUrl: './Student-deatile.component.html',
  styleUrls: ['./Student-deatile.component.css']
})
export class StudentDeatileComponent implements OnInit {
  itemss: Student;
sub:any;
id : any;
  // tslint:disable-next-line: variable-name
  constructor(private user_serviceService : User_serviceService , private router: Router,    private route: ActivatedRoute,    ) { }




  
  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.id =params.id;
      });

      this.viewDetails(this.id);
  }


  viewDetails(id)
{
  this.user_serviceService.getStudentde(id)
  .subscribe(
    data => {
      this.itemss =data.payload.data() as Student;
      console.log(this.itemss);

    }
  );
}

}
