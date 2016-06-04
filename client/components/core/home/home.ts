import 'reflect-metadata';
import 'zone.js/dist/zone';
import {MeteorComponent} from 'angular2-meteor';
import { Component } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { RouterLink } from '@angular/router-deprecated';
@Component({
  selector: 'home',
  directives: [RouterLink],
  templateUrl: '/client/components/core/home/home.html'
})
export class Home extends MeteorComponent {
}
