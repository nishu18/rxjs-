import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ObserveComponent } from './observe/observe.component';
import { OperatorComponent } from './operator/operator.component';
import { FormComponent } from './form/form.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    ObserveComponent,
    OperatorComponent,
    FormComponent,
    PipeComponent,
    TimerComponent
  ],
  // exports: [FormComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FormGroup,
    // FormControl,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
