import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController, Button } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginPage } from '../login/login'
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  public form: FormGroup;

  constructor(
    private navCtrl: NavController, 
    private fb: FormBuilder, 
    private loadingCrtl: LoadingController,
    private afAuth: AngularFireAuth,
    private alertCtrl: AlertController) {

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

  }

  submit() {
    let loader = this.loadingCrtl.create({content: "Cadastrando..."})
    loader.present();

    this.afAuth.auth
      .createUserWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
      .then(()=>{
        loader.dismiss()
        let alert = this.alertCtrl.create({
          title: 'Bem vindo!',
          subTitle: 'Seu cadastro foi criado com sucesso e você já tem acesso!',
          buttons: ['OK']
        })
        alert.present()
      })
      .catch(()=>{
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Ops, algo deu errado!',
          subTitle: 'Não foi possível realizar o seu cadastro.',
          buttons: ['OK']
        })
        alert.present()
      })
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
