import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  text:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,private storage: Storage) {
    this.menuCtrl.enable(true, 'menuCliente');
    storage.get('name').then((val) => {
      this.text=val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  closeMenu(){
    this.navCtrl.setRoot(HomePage);
  }
}
