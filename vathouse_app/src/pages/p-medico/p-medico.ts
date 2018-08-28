import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the PMedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p-medico',
  templateUrl: 'p-medico.html',
})
export class PMedicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, "menuCliente");
    this.menuCtrl.enable(false, "menuAdmin");
    this.menuCtrl.enable(true, "menuMedico");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PMedicoPage');
  }

}
