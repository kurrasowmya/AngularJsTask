import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2component',
  templateUrl: './child2component.component.html',
  styleUrls: ['./child2component.component.css']
})
export class Child2componentComponent implements OnInit {

  constructor() { }
  //To get data from parent
  @Input() public parentData;

  ngOnInit() {
  }

}
