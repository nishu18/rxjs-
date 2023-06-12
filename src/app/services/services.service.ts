import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of , interval, Subscription} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  elapsedTime: number = 5;
  isTimerRunning: boolean = false;
  isTimerPaused: boolean = false;
  timerSubscription!: Subscription;  
  private apiUrl=''
  private counter$: Observable<number>;



  constructor(private http:HttpClient) {
    this.counter$=interval(1000)
   }
       
    getCounter():Observable<number>{
      return this.counter$
    }
  // getData():Observable<any>{
  //   return this.http.get<any>(this.apiUrl)
  // }
  getData():Observable<string[]>{
    return of (['itrem1', 'item2', 'item3'])
  }
  postData(data:any):Observable<any>{
     return this.http.post<any>(this.apiUrl, data)
  }

  deleteData(id:number):Observable<any>{
    const url=`${this.apiUrl}/${id}`
    return this.http.delete<any>(url)
  }

  // startTimer(): Observable<any> {
  //   this.isTimerRunning=true
  //   this.timerSubscription=interval(1000).subscribe(()=>{
  //       this.elapsedTime--;
  //   })
  // }

}
