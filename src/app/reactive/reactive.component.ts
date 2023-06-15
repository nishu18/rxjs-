import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  formSubmissions: any[] = [];


  formData: any = {};
   loginForm=new FormGroup({
    user:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email])
   })

   loginUser(){
    if (this.loginForm.valid) {
      this.formSubmissions.push(this.loginForm.value);
      console.log(this.formSubmissions);
      this.loginForm.reset();
    }
   }

   get user(){
    return this.loginForm.get('user')
   }

   get email(){
    return this.loginForm.get('email')
   }
}
