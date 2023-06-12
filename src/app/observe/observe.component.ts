import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent {
  data:any
   constructor( private dataServices:ServicesService){}

   ngOnInit(){
   
    this.dataServices.getData().subscribe(response=>{
      this.data=response
    })
   }

   postData(){
    const newData={name:"nishant", email:"a@gmail.com"}
   

   this.dataServices.postData(newData).subscribe(response=>{
    console.log(response)
   })
  }

  deleteData(id:number){
    this.dataServices.deleteData(id).subscribe(response=>{
      console.log(response)
    })
  }

}
