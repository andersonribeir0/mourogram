
import { Component, ViewChild } from '@angular/core';
import { Slides, NavParams, ViewController, LoadingController, NavController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';

@Component({
  selector: 'page-send-photo',
  templateUrl: 'send-photo.html',
})

export class SendPhotoPage {
  @ViewChild(Slides) slides: Slides;
  
  public listObservable: any;
  public user: string = '';
  public form: FormGroup;
  public location: string = '';
  public photo: string = '';
  public photos: AngularFireList<any>;
  public message: string = '';
  public filter: string = 'original';
  public filters: string[] = [
    "original",
    "_1977",
    "aden",
    "brannan",
    "brooklyn",
    "clarendon",
    "earlybird",
    "gingham",
    "hudson",
    "inkwell",
    "kelvin",
    "lark",
    "lofi",
    "maven",
    "mayfair",
    "moon",
    "nashville",
    "perpetua",
    "reyes",
    "rise",
    "slumber",
    "stinson",
    "toaster",
    "valencia",
    "walden",
    "willow",
  ];

  constructor(
    private viewCtrl: ViewController, 
    private alertCrtl: AlertController, 
    private navParams: NavParams,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private fb: FormBuilder
  ) {
    this.photos = db.list('/photos')
    this.photo = this.navParams.get('photo')
    afAuth.authState.subscribe(user => {
      if (user){
        this.user = user.email
      }
    })

    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      message: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.required
      ])]
    })

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  changeFilter() {
    let currentIndex = this.slides.getActiveIndex();
    this.filter = this.filters[currentIndex];
  }

  getLocation(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (data) => {
        this.location = data.coords.latitude + ',' + data.coords.longitude
      }, (err) => {
        let alert = this.alertCrtl.create({
          title: 'Ops, algo deu errado',
          subTitle: 'Não foi possível obter a sua localização.',
          buttons: ['OK']
        })
        alert.present()
      })
    }
  }

  submit() {
    let loader = this.loadingCtrl.create({ content: "Enviando..."});
    loader.present();
    
    this.photos.push({
      user: this.user,
      image: this.photo,
      filter: this.filter,
      location: this.location,
      title: this.form.controls['title'].value,
      message: this.form.controls['message'].value,
      date: firebase.database.ServerValue.TIMESTAMP
    })
    .then(() => {
      loader.dismiss()
      this.listObservable = this.photos.snapshotChanges();
      this.listObservable.subscribe()
      this.navCtrl.setRoot(HomePage)
    }, () => {
      loader.dismiss()
      let alert = this.alertCrtl.create({
        title: 'Ops, algo deu errado',
        subTitle: 'Não foi possível enviar sua imagem.',
        buttons: ['OK']
      })
      alert.present()
    });
  }
  
}
