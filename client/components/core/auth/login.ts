import 'reflect-metadata';
import 'zone.js/dist/zone';
import {MeteorComponent} from 'angular2-meteor';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Component } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Router , RouterLink} from '@angular/router-deprecated';
import { Meteor } from 'meteor/meteor';
@Component({
  selector: 'login',
  directives: [RouterLink],
  templateUrl: '/client/components/core/auth/login.html'
})
@InjectUser('')
export class Login extends MeteorComponent {
  loginForm: ControlGroup;
  error: string;
  another:string;
  constructor(private router: Router) {
    super();

    let fb = new FormBuilder();

    this.loginForm = fb.group({
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

  login(credentials) {
    console.log('login....');
    this.another=credentials.email;
    if (this.loginForm.valid) {
      Meteor.loginWithPassword(credentials.email, credentials.password, (err) => {
        if (err) {
          this.error = err;
          console.log("ERROR : "+this.error);
          this.updateError(err);
          alert('set failed...');
          this.another="failed";
        }
        else {
          this.router.navigate(['/Dashboard']);
        }
      });
    }else{
      console.log('failed');
    }
  }


}
