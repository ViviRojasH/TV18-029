import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PClientePage } from './p-cliente';

@NgModule({
  declarations: [
    PClientePage,
  ],
  imports: [
    IonicPageModule.forChild(PClientePage),
  ],
})
export class PClientePageModule {}
