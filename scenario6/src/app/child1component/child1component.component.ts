import { Component, OnInit , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child1component',
  templateUrl: './child1component.component.html',
  styleUrls: ['./child1component.component.css']
})
export class Child1componentComponent implements OnInit {

  constructor() { }
  //to send data to parent
  @Output() public childEvent=new EventEmitter(); 
  fireEvent()
  {
    this.childEvent.emit('hey code');
  }

  ngOnInit() {
  }

}
