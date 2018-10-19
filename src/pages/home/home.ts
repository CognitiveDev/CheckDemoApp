import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TalkPage } from '../talk/talk';
import { SearchingPage } from '../searching/searching';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }goToTalk(params){
    if (!params) params = {};
    this.navCtrl.push(TalkPage);
  }goToSearching(params){
    if (!params) params = {};
    this.navCtrl.push(SearchingPage);
  }
}