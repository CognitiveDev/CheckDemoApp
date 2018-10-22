import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TalkPage } from '../talk/talk';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {
  }
  goToTalk(params){
    if (!params) params = {};
    this.navCtrl.push(TalkPage);
  }
}