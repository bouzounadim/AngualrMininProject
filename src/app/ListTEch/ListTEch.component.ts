import { TechServiceService } from './../services/TechService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ListTEch',
  templateUrl: './ListTEch.component.html',
  styleUrls: ['./ListTEch.component.css']
})
export class ListTEchComponent implements OnInit {
  items :any;
  constructor( private techservice : TechServiceService) { }

  ngOnInit() {

    this.techservice.getall().subscribe((result) => {
      console.log(result);
      
      this.items = result;
      console.log(this.items.nomTech);
    
    });
    
  }

}
