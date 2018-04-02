import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

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
    let html = '<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBbI6Q4L6K90A74du5XfTWyhLoJFCYljPM&q='+ this.location + '" allowfullscreen></iframe>' 
    document.getElementById('map').innerHTML = html;
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }
}
