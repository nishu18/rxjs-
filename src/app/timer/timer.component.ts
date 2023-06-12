import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  elapsedTime: number = 5.00;
  initialTime: number = 5.00;
  minute:number=5;
  second:number=0

  isTimerRunning: boolean = false;
  isTimerPaused: boolean = false;
  timerSubscription!: Subscription;


  constructor( private dataService:ServicesService){}
  ngOnInit() {
    this.resetTimer();
  }
   
  
  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  
  startTimer() {
    this.isTimerRunning = true;
    this.isTimerPaused = false;

    this.timerSubscription = interval(1000).subscribe(() => {
      if(this.minute===0 && this.second===0){
        this.stopTimer();

      }else{
        if (this.second === 0) {
          this.minute--;
          this.second = 59;
        } else {
          this.second--;
        }
      }
    
    });
  }

  pauseTimer() {
    this.isTimerPaused = true;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }   
  }

  resumeTimer() {
    this.isTimerPaused = false;
    this.startTimer();
    if(this.minute===0 && this.second===0){
      this.stopTimer()

    }
  
  }

  resetTimer() {
    this.minute=0
    this.second=10
    this.isTimerRunning = false;
    this.isTimerPaused = false;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private stopTimer() {
    this.isTimerRunning = false;
    this.resetTimer()
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }  }
}
