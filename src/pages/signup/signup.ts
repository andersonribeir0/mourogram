import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  
  loginPage: any;

  constructor(public navCtrl: NavController) {
    this.loginPage = LoginPage;
  }

}
