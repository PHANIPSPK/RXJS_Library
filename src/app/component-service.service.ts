import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {
  subject=new Subject()

  constructor() {
    // this.subject.next(1)
   }

  

}
