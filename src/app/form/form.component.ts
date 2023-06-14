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







// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-my-form',
//   templateUrl: './my-form.component.html',
//   styleUrls: ['./my-form.component.css']
// })
// export class MyFormComponent {
//   formData = {
//     name: '',
//     password: ''
//   };

//   userLogin() {
//     // Access the form data
//     const name = this.formData.name;
//     const password = this.formData.password;

//     // Perform login logic or any other operations with the form data
//     console.log('Name:', name);
//     console.log('Password:', password);

//     // Clear the form data
//     this.formData.name = '';
//     this.formData.password = '';
//   }
// }
