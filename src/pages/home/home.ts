import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  photosTab: any;
  profileTab: any;

  constructor(public navCtrl: NavController) {
    this.photosTab = LoginPage;
    this.profileTab = LoginPage;
  }

}
