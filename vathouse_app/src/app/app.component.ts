import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PClientePage } from '../pages/p-cliente/p-cliente';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild("Nav") nav:Nav;
  rootPage:any = HomePage;
  user;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.user=JSON.parse(localStorage.getItem("user"))
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }
  closeMenu(){
    localStorage.removeItem("user");
    this.nav.setRoot(HomePage);
  }
  openPage(page){
    console.log("hola"+page);
      this.nav.setRoot(PClientePage);
  }
}

