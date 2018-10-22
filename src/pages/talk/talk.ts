import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SearchingPage } from '../searching/searching';
import { ProfilePage } from '../profile/profile';
import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-talk',
  templateUrl: 'talk.html'
})
export class TalkPage {
	
	recording: boolean = false;
	filePath: string;
	fileName: string;
	audio: MediaObject;
	audioList: any[] = [];

  constructor(public navCtrl: NavController
  ,private media: Media,
  public platform: Platform
  ) {
  }
  goToSearching(params){
    if (!params) params = {}; 
	this.navCtrl.push(SearchingPage);
	setTimeout(() => 
	{
		this.navCtrl.push(ProfilePage);
	},
	3000);
  }
	
	startRecord() {
	  if (this.platform.is('ios')) {
		this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
		this.filePath = 'assets/img' + this.fileName;
		this.audio = this.media.create(this.filePath);
	  } else if (this.platform.is('android')) {
		this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
		this.filePath = 'assets/img' + this.fileName;
		this.audio = this.media.create(this.filePath);
	  }
	  this.audio.startRecord();
	  this.recording = true;

	}
	
	stopRecord(params) {
		
	  this.audio.stopRecord();
	  let data = { filename: this.fileName };
	  this.audioList.push(data);
	  localStorage.setItem("audiolist", JSON.stringify!(this.audioList));
	  this.recording = false;
	  this.sendObject()
	  if (!params) params = {}; 
		this.navCtrl.push(SearchingPage);
		setTimeout(() => 
		{
			this.navCtrl.push(ProfilePage);
		},
		3000);
	}
	
	sendObject(){
	
		/*
		var util = require('util');
		var config = {
			endpoint: 'https://s3.eu-geo.objectstorage.softlayer.net',
			apiKeyId: 'LtcQWounmPC1uj0ZACVkyhq4SM8Jj4lhqJxb8rixciDv',
			ibmAuthEndpoint: 'https://iam.ng.bluemix.net/oidc/token',
			serviceInstanceId: 'crn:v1:bluemix:public:cloud-object-storage:global:a/57a5cbbfa7d9f8d3c4cd56c29b0a7fc6:ef12364c-5e01-4860-8d6e-375609440c04::',
		};
		 
		var cos = new AWS.S3(config);
		 
		function doCreateBucket() {
			console.log('Creating bucket');
			return cos.createBucket({
				Bucket: 'my-bucket',
				CreateBucketConfiguration: {
				  LocationConstraint: 'us-standard'
				},
			}).promise();
		}
		 
		function doCreateObject() {
			console.log('Creating object');
			return cos.putObject({
				Bucket: 'my-bucket',
				Key: 'foo',
				Body: 'bar'
			}).promise();
		}
		 
		function doDeleteObject() {
			console.log('Deleting object');
			return cos.deleteObject({
				Bucket: 'my-bucket',
				Key: 'foo'
			}).promise();
		}
		 
		function doDeleteBucket() {
			console.log('Deleting bucket');
			return cos.deleteBucket({
				Bucket: 'my-bucket'
			}).promise();
		}
		 
		doCreateBucket()
			.then(doCreateObject)
			.then(doDeleteObject)
			.then(doDeleteBucket)
			.then(function() {
				console.log('Finished!');
			})
			.catch(function(err) {
				console.error('An error occurred:');
				console.error(util.inspect(err));
			});
		*/
	}
}

