import { Component } from '@angular/core';
import { Observable, Subscription, timeInterval } from 'rxjs';
import { ServicesService } from '../services/services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  time!:String;
  timeSubscription!:Subscription;
  data$!:Observable<string[]>;
  counter$!:Observable<number>
  users$: Observable<any>;


    constructor(private dataServices: ServicesService, private http: HttpClient ) {
      this.users$ = this.http.get<any[]>('./assets/data.json');

    }

    ngOnInit():void {
      // this.timeSubscription=timeInterval().subscribe((time)=>{
      //   this.time=time
      // })
      // this.time$=timeInterval()
      this.data$=this.dataServices.getData()

      this.counter$=this.dataServices.getCounter()
    }
    ngOnDestroy():void
{
  // this.timeSubscription?.unsubscribe()
}}
