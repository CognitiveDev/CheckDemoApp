import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TalkPage } from '../talk/talk';
import { SearchingPage } from '../searching/searching';

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
  }goToSearching(params){
    if (!params) params = {};
    this.navCtrl.push(SearchingPage);
  }
}