import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  formData: any = {};
   loginForm=new FormGroup({
    user:new FormControl('', Validators.required),
    email:new FormControl('', [Validators.required, Validators.email])
   })

   loginUser(){
    console.log(this.loginForm.value)
    this.formData=this.loginForm.value
    this.loginForm.reset(); 
   }

   get user(){
    return this.loginForm.get('user')
   }

   get email(){
    return this.loginForm.get('email')
   }
}
