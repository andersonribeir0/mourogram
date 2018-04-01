import { Component, ViewChild } from '@angular/core';
import { Slides, ViewController, AlertController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-send-photo',
  templateUrl: 'send-photo.html',
})

export class SendPhotoPage {
  @ViewChild(Slides) slides: Slides;

  public form: FormGroup;
  public location: string = '';
  public photo: string = '';
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

  constructor(private viewCtrl: ViewController, private alertCrtl: AlertController, private navParams: NavParams) {
    this.photo = this.navParams.get('photo')
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

  
}
