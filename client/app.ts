import 'reflect-metadata';
import 'zone.js/dist/zone';
import {MeteorComponent} from 'angular2-meteor';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';
import {LoginButtons} from 'angular2-meteor-accounts-ui';
import { RouterLink } from '@angular/router-deprecated';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Home } from './components/core/home/home.ts';
import { Login } from './components/core/auth/login.ts';
import { SignUp } from './components/core/auth/signup.ts';
import { Dashboard } from './components/core/dashboard/dashboard.ts';
import { Meteor } from 'meteor/meteor';
@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [ROUTER_DIRECTIVES, RouterLink]
})
@RouteConfig([
  { path: '/', as: 'Home', component: Home },
  { path: '/login', as: 'Login', component: Login },
  { path: '/signUp', as: 'SignUp', component: SignUp },
  { path: '/dashboard', as: 'Dashboard', component: Dashboard }
  /*,
  { path: '/signup', as: 'Signup', component: Signup }*/
])
@InjectUser('')
class LIOSK extends MeteorComponent {
  user: Meteor.User;

  constructor() {
    super();
  }


}

bootstrap(LIOSK, [ ROUTER_PROVIDERS,  provide(APP_BASE_HREF, { useValue: '/' })]);
