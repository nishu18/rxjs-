import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent {
  result:any

   constructor(){
    const source:Observable<number>=from([1,2,3,4,5])

    const op:Observable<number>=source.pipe(
      map(value=>value *2),
      filter(value=>value %3===0)
    )
    op.subscribe(value=>{
      this.result=value
    })
   }
}
