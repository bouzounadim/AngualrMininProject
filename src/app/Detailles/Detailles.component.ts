import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Detailles',
  templateUrl: './Detailles.component.html',
  styleUrls: ['./Detailles.component.css']
})
export class DetaillesComponent implements OnInit {
  @Input() childMessage: any;
  @Input() childMessage2: any;
  constructor() { }

  ngOnInit() {
    
    
  }

}
