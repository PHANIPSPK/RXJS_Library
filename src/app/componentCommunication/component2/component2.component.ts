import { Component, OnInit } from '@angular/core';
import { ComponentServiceService } from 'src/app/component-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit{
  inputText:string=''
  constructor(private serv:ComponentServiceService){

  }
  ngOnInit(): void {
      this.serv.subject.subscribe((data:any)=>{
        this.inputText=data
      })
  }



}
