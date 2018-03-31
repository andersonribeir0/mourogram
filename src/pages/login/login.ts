import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  signUpPage: any;
  public form: FormGroup;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder, 
    private loadingCrtl: LoadingController,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController
  ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });

    afAuth.authState.subscribe( user => {
      if(user) {
        this.navCtrl.setRoot(HomePage);
      }
    });
  }

  goToSignup(){
    this.navCtrl.setRoot(SignupPage)
  }

  submit(){
    let loader = this.loadingCrtl.create({ content: "Autenticando..." });
    loader.present();
    
    this.afAuth.auth
    .signInWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
    .then(()=>{
      loader.dismiss();
      this.navCtrl.setRoot(HomePage);
    })
    .catch(() => {
      loader.dismiss()
      let alert = this.alertCtrl.create({
        title: 'Autenticação inválida',
        subTitle: 'Usuário ou senha incorretos.',
        buttons: ['OK'] 
      })
      alert.present();
    })
  }

}
