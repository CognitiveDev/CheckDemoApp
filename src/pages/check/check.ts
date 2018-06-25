import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TalkPage } from '../talk/talk';
import { CheckListPage } from '../check-list/check-list';

@Component({
  selector: 'page-check',
  templateUrl: 'check.html'
})
export class CheckPage {

  constructor(public navCtrl: NavController) {
  }
  goToTalk(params){
    if (!params) params = {};
    this.navCtrl.push(TalkPage);
  }
  goToCheckList(params){
    if (!params) params = {};
    this.navCtrl.push(CheckListPage);
  }
  pass(id,next){
	var elem = document.getElementById(id);
	elem.style.display = "none";
	var elem2 = document.getElementById(next);
	elem2.style.display = "block";
  }
  check(id,next){
	var elem = document.getElementById(id);
	elem.style.display = "none";
	var elem2 = document.getElementById(next);
	elem2.style.display = "block";
  }
}
