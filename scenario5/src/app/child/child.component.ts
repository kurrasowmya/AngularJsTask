import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  //empty string
  public message3="";
  //to get data from child
  @Output() public childEvent=new EventEmitter(); 
  fireEvent()
  {
    this.childEvent.emit('hey code in child');
  }
  ngOnInit() {
  }

  

}
