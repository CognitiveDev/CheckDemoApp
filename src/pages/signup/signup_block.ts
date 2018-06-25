import {Component} from '@angular/core';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

	constructor(private alertCtrl: AlertController) {

	}


	openFilters() {
	  let alert = this.alertCtrl.create({
		title: 'Erreur connexion',
		subTitle: 'Les indentifiants sont invalides',
		buttons: ['OK']
	  });
	  alert.present();
	  }

	  
}

