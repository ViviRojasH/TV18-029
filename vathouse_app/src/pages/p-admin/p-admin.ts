import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the PAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p-admin',
  templateUrl: 'p-admin.html',
})
export class PAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, "menuCliente");
    this.menuCtrl.enable(true, "menuAdmin");
    this.menuCtrl.enable(false, "menuMedico");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PAdminPage');
  }

}
