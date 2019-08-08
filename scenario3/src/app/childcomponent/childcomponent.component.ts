import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  constructor() { }
  //To get data from parent component
  @Input('parentData') public name;
  ngOnInit() {
  }

}
