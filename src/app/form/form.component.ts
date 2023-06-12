import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    myForm: FormGroup
    submitted:boolean=false
    formData: any = {};


    constructor(){
      this.myForm=new FormGroup({
        name:new FormControl(''),
        email:new FormControl('')

      })
    }

    onSubmit(){
      console.log(this.myForm.value)
      this.submitted=true
      this.formData=this.myForm.value
    }
}
