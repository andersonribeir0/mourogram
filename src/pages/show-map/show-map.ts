import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { ENV } from '@app/env';

@Component({
  selector: 'page-show-map',
  templateUrl: 'show-map.html',
})

export class ShowMapPage {
  
  public location: string = '';

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.location = navParams.get('location');
  }

  ionViewDidLoad() {
    let src = `https://www.google.com/maps/embed/v1/place?key=${ENV.google_api_key}&q=${this.location} allowfullscreen></iframe>`
    let html = `<iframe width="600" height="450" frameborder="0" style="border:0" src=${src}`;
    document.getElementById('map').innerHTML = html;
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }
}
