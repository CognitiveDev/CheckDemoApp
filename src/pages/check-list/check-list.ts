import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TalkPage } from '../talk/talk';

@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html'
})
export class CheckListPage {

  constructor(public navCtrl: NavController) {
  }
   goToTalk(params){
    if (!params) params = {};
    this.navCtrl.push(TalkPage);
  }
    pass(id,next){
	var elem = document.getElementById(id);
	elem.style.display = "none";
  }
  check(id,next){
	var elem = document.getElementById(id);
	elem.style.display = "none";
  }
}
