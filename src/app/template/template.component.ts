import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  item:any
  formValue:any
  @ViewChild('myForm') myForm!: NgForm;
  taskName: string = '';
  taskEmail: string = '';

  constructor(){
    
  }

  userLogin(formValue: any) {
    this.item = formValue;
    console.log(this.item);
    this.taskName = ''; // Clear taskName variable
    this.taskEmail = '';
    formValue.resetForm();  }
  
}
