import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TalkPage } from '../talk/talk';
import { CheckPage } from '../check/check';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }
  goToTalk(params){
    if (!params) params = {};
    this.navCtrl.push(CheckPage);
  }
}

