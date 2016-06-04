import 'reflect-metadata';
import 'zone.js/dist/zone';
import {MeteorComponent} from 'angular2-meteor';
import { FormBuilder, ControlGroup, Validators } from '@angular/common';
import { Component } from '@angular/core';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Router , RouterLink} from '@angular/router-deprecated';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'dashboard',
  directives: [RouterLink],
  templateUrl: '/client/components/core/dashboard/dashboard.html'
})
@InjectUser('')
export class Dashboard extends MeteorComponent {
  constructor(private router: Router) {
    super();

  }


 logout() {
   this.autorun(() => {
     console.log("logout....");
     Meteor.logout(err=>{
       if(err){
         console.log("logout failed..");
         //do some thing for logout failure...
         this.router.navigate(['/Home']);
       }else{
         console.log("logout success");
         this.router.navigate(['/Home']);
       }
     });
   });
 }


}
