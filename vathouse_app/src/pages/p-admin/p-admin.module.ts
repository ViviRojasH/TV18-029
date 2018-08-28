import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PAdminPage } from './p-admin';

@NgModule({
  declarations: [
    PAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(PAdminPage),
  ],
})
export class PAdminPageModule {}
