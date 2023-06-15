import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  item: any[] = [];
  formValue:any
  @ViewChild('myForm') myForm!: NgForm;

  taskName: string = '';
  taskEmail: string = '';

  constructor() {
    // this.item = [];
  }

  // userLogin(form: NgForm) {
  //   if (form.valid) {
  //     const newItem = {
  //       name: this.taskName,
  //       email: this.taskEmail
  //     };
  
  //     if (!this.item) {
  //       this.item = []; // Initialize the array if it's empty
  //     }
  
  //     this.item.push(newItem); // Push the new item to the array
  
  //     console.log(this.item);
  
  //     form.resetForm();
  //     this.taskName = '';
  //     this.taskEmail = '';
  //   }
  // }


  userLogin(formValue: any) {
    this.item.push(formValue);
    console.log(this.item);
    this.taskName = ''; // Clear taskName variable
    this.taskEmail = '';
    formValue.resetForm();  }
  
}
  
  
