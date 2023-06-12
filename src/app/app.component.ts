import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-angular-app';
  observable!: Observable<string>;
  subscription!: Subscription;
  values: string[] = [];


  ngOnInit() {
    // Create an observable
    this.observable = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next('First value');
      }, 1000);
  
      setTimeout(() => {
        subscriber.next('Second value');
      }, 2000);
  
      setTimeout(() => {
        subscriber.next('Third value');
        subscriber.complete();
      }, 3000);
    });
  
    // Subscribe to the observable
    this.subscription = this.observable.subscribe({
      next: (value) => {
        console.log(value);
        this.values.push(value)
      },
      complete: () => {
        console.log('Observable completed');
      },
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the observable
    this.subscription.unsubscribe();
  }


}
