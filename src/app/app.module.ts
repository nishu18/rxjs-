import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ObserveComponent } from './observe/observe.component';
import { OperatorComponent } from './operator/operator.component';
import { FormComponent } from './form/form.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule,NgModel } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { TimerComponent } from './timer/timer.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {    MatCardModule} from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    ObserveComponent,
    OperatorComponent,
    FormComponent,
    PipeComponent,
    TimerComponent,
    TemplateComponent,
    ReactiveComponent,
  ],
  exports: [],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [NgModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
