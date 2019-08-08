import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
  constructor() { }
  //To send data to parent
 @Output() public childEvent=new EventEmitter(); 
 //fireEvent to emit the data to parent
  fireEvent()
  {
    this.childEvent.emit('hey code');
  }
  ngOnInit() {
  }

}
