import { Component } from '@angular/core';
import { ComponentServiceService } from 'src/app/component-service.service';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  constructor(private s:ComponentServiceService){

  }


  enteredText:string=''

  onClick(){
    // console.log(this.enteredText);
    this.s.subject.next(this.enteredText)
  }
}
