import { Component, OnInit ,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  //Empty string
  public message2="";
  //to get data from child
  @Output() public childEvent=new EventEmitter(); 
 

  ngOnInit() {
  }

}
