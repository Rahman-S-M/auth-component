import 'reflect-metadata';
import 'zone.js/dist/zone';
import {MeteorComponent} from 'angular2-meteor';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Component } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Router , RouterLink} from '@angular/router-deprecated';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

@Component({
  selector: 'signup',
  directives: [RouterLink],
  templateUrl: '/client/components/core/auth/signup.html'
})
@InjectUser('')
export class SignUp extends MeteorComponent {
  signupForm: ControlGroup;
  error: string;
  another:string;
  constructor(private router: Router) {
    super();

    let fb = new FormBuilder();

    this.signupForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error = '';
  }

 updateError(err){
   this.error="updated.....";
   console.log("updating error"+err);
   this.error=err;
 }

 signup(credentials) {
   if (this.signupForm.valid) {
     Accounts.createUser({ email: credentials.email, password: credentials.password}, (err) => {
       if (err) {
         this.error = err;
       }
       else {
         console.log("success..route to home");
         this.router.navigate(['/Home']);
       }
     });
   }
 }


}
