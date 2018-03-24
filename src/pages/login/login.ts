import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  signUpPage: any;
  constructor(public navCtrl: NavController) {
    this.signUpPage = SignupPage;
  }

}
