import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the PClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p-cliente',
  templateUrl: 'p-cliente.html',
})
export class PClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, "menuCliente");
    this.menuCtrl.enable(false, "menuAdmin");
    this.menuCtrl.enable(false, "menuMedico");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PClientePage');
  }

}
